import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import fetch from "isomorphic-unfetch";
import Layout from "./components/Layout";
import Upload from "./forms/Upload"
import { Button, Form, Input, Row, Col, Spin, Alert } from "antd";
import { useRouter } from "next/router";
import RichText from "./forms/RichText";
import {addProduct} from './redux/actions/app'

// const Https = "https://harrys-app-clone.vercel.app";
const Https = "http://localhost:3000";

const AddProduct = ({data}) => {
  // const products = useSelector(state => state.products.listProducts)
  const dispatch = useDispatch();
  const router = useRouter();

  const [dataTime] = useState(new Date().toLocaleDateString("en-GB"));
  const [form, setForm] = useState({
    index: data.length + 1,
    name: "",
    shortDescription: "",
    description: "",
    imgUrl: [],
    price: null,
    date: dataTime,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  //useEffect
  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createProduct();
        alert("Success");
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  // create product
  const createProduct = async () => {
    try {
      const res = await fetch(`${Https}/api/products`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push(`/${data[data.length - 1]._id}/view`);
    } catch (error) {
      console.log("error",error);
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    dispatch(addProduct(form))
    setIsSubmitting(true);
  };

  // handle change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // validate
  const validate = () => {
    let err = {};

    if (!form.name || form.name == null) {
      err.name = "Name is required";
    }
    if (!form.shortDescription || form.shortDescription == null) {
      err.shortDescription = "Short Description is required";
    }
    if (!form.price || form.price == null) {
      err.price = "Price is required";
    }

    return err;
  };

  return (
    <Layout>
      <div className="form-add">
        {isSubmitting ? (
          <Spin tip="Loading...">
            <Alert
              message="Alert message title"
              description="Add product success."
              type="info"
            />
          </Spin>
        ) : (
          <Form layout="vertical" onSubmit={handleSubmit}>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="btn-save"
              type="primary"
            >
              Save
            </Button>
            <h1> Product Information </h1>
            <div className="background-form">
              <Form.Item
                label="Product Name"
                hasFeedback
                fillRule={
                  errors.name
                    ? [
                        {
                          required: true,
                          content: "Please enter name product",
                          pointing: "below",
                        },
                      ]
                    : null
                }
              >
                <Input
                  allowClear
                  placeholder=""
                  fluid="true"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                label="Short Description"
                hasFeedback
                fillRule={
                  errors.shortDescription
                    ? {
                        required: true,
                        content: "Please enter short description",
                        pointing: "below",
                      }
                    : null
                }
              >
                <Input
                  allowClear
                  placeholder=""
                  fluid="true"
                  name="shortDescription"
                  onChange={handleChange}
                />
              </Form.Item>
              {/* rich text editor */}
              <Form.Item label="Highlight Features" hasFeedback>
                <RichText form={form} />
              </Form.Item>
              <Row className="price">
                <Col span={10}>
                  <Form.Item
                    label="Price"
                    hasFeedback
                    fillRule={
                      errors.price
                        ? {
                            required: true,
                            content: "Please enter short description",
                            pointing: "below",
                          }
                        : null
                    }
                  >
                    <Input
                      allowClear
                      placeholder=""
                      fluid="true"
                      name="price"
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item label="Compare at price" hasFeedback>
                    <Input allowClear placeholder="" disabled />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <h1> Products Gallery </h1>
            <div className="background-form">
              <Form.Item>
                {/* <UploadImage/> */}

                <Upload form={form}/>
              </Form.Item>
            </div>
          </Form>
        )}
      </div>
    </Layout>
  );
};

AddProduct.getInitialProps = async () => {
  const res = await fetch(`${Https}/api/products`);
  const { data } = await res.json();

  return { data };
};

export default AddProduct;
