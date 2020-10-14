import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Input, Row, Col, Spin, Alert } from "antd";
import { useRouter } from "next/router";
import RichText from "../formEdit/RichText";
import Layout from "../components/Layout";
import Upload from '../formEdit/Upload'
import {Https} from '../../utils/port'

const EditProduct = ({ product }) => {
  const [dataTime] = useState(new Date().toLocaleDateString("en-GB"));
  const [form, setForm] = useState({
    index: 1,
    name: product.name,
    shortDescription: product.shortDescription,
    description: product.description,
    imgUrl: product.imgUrl,
    price: product.price,
    date: dataTime,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  //useEffect
  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateProduct();
        alert("Success");
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  // create product
  const updateProduct = async () => {
    try {
      const res = await fetch(`${Https}/api/products/${router.query.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push(`/${router.query.id}/view/`);
    } catch (error) {
      console.log(error);
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
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
              description="Update product success."
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
            <h1> Edit Product Information </h1>
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
                  value={form.name}
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
                  value={form.shortDescription}
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
                    rules={
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
                      value={form.price}
                    />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item label="Compare at price" hasFeedback>
                    <Input
                      allowClear
                      placeholder=""
                      disabled
                      value={form.price}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <h1> Products Gallery </h1>
            <div className="background-form">
              <Form.Item>
                <Upload form={form}/>
              </Form.Item>
            </div>
          </Form>
        )}
      </div>
    </Layout>
  );
};

EditProduct.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${Https}/api/products/${id}`);
  const { data } = await res.json();

  return { product: data };
};

export default EditProduct;
