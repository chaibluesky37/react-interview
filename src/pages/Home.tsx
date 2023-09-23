import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Card, Row, Layout, Button, Input, Space, Select } from "antd";
import _ from "lodash";

import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { carRequest, addCartAction, increaseCart } from "../redux/actions";

const { Content } = Layout;
const { Meta } = Card;
function Home() {
  const dispatch = useDispatch();
  const dataCars = useSelector((state: any) => state.carReducers.carData);
  const dataCarts = useSelector((state: any) => state.cartReducers.cartData);
  let arr = dataCarts;
  const [search, setSearch] = useState<string>("");
  const [sorting, setSorting] = useState<string>("");

  const handleChange = (value: string) => {
    // console.log(`selected ${value}`);
    setSorting(value);
  };

  const addCart = (car: any) => {
    // console.log(car);
    arr.push({
      title: car.title,
      price: car.price,
      photo: car.photo,
      amount: 1,
    });

    dispatch(addCartAction(arr));
    localStorage.setItem("items", JSON.stringify(arr));
    dispatch(increaseCart());
  };

  useEffect(() => {
    dispatch(carRequest());
  }, []);

  return (
    <>
      <Header />
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Content
          // style={{ padding: "0 50px" }}
          style={{ margin: "0 50px" }}
          // className="container"
        >
          <div className="content-header">
            <Row style={{ width: "100%" }} gutter={16}>
              <Col xl={12} sm={24}>
                <div style={{ fontSize: 30, fontWeight: 600 }}>
                  Car Available
                </div>
              </Col>
              <Col xl={6} sm={24}>
                <Input
                  placeholder="Search Car"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Col>
              <Col xl={6} sm={24}>
                <Select
                  defaultValue="asc"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={[
                    { value: "asc", label: "Price: Low - High" },
                    { value: "desc", label: "Price: High - Low" },
                  ]}
                />
              </Col>
            </Row>
          </div>
          <div className="site-layout-content">
            <Row gutter={16} style={{ width: "100%", marginTop: 20 }}>
              {_.orderBy(
                _.filter(dataCars, function (o) {
                  return o.fields.title.includes(search);
                }),
                ["fields.price"],
                sorting === "asc"
                  ? ["asc"]
                  : sorting === "desc"
                  ? ["desc"]
                  : ["asc"],
              ).map((data: any, inx: number) => {
                let url = data.fields?.photo;
                return (
                  <Col
                    className="gutter-row"
                    xl={6}
                    md={12}
                    sm={24}
                    key={inx}
                    style={{ marginBottom: 50 }}
                  >
                    <Card
                      bordered={false}
                      style={{ width: 302, height: 340 }}
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={url}
                          style={{ width: 302, height: 185 }}
                          onError={() => {
                            url = "https://picsum.photos/id/237/200/300";
                          }}
                        />
                      }
                      actions={[
                        <Button
                          size="large"
                          type="primary"
                          onClick={() => {
                            addCart(data.fields);
                          }}
                        >
                          Add to cart
                        </Button>,
                      ]}
                    >
                      <Meta
                        title={data.fields?.title}
                        description={`${data.fields?.price} THB/Day`}
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
