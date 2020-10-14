import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Row, Col, Checkbox, Select } from "antd";
import LayoutCheckout from "./layout/LayoutCheckout";
import InfoProduct from "./InfoProduct";
import fetch from "isomorphic-unfetch";
import {useRouter} from 'next/router'
import {useSelector, useDispatch} from 'react-redux'
import { addContact } from '../../redux/actions/checkouts'
import {Https} from '../../../utils/port'

const { Option } = Select;

const ContactInformation = ({ productId}) => {
  const router = useRouter();
  const [form] = Form.useForm();

  // hook redux
  const initContact = useSelector(state => state.checkout.contact)
  const [formContact, setFormContact] = useState(initContact)
  const dispatch = useDispatch();

  const [checkEmail, setCheckEmail] = useState(false);
  useEffect(() => {
    form.validateFields(["email-mobile"]);
  }, [checkEmail]);

  const onCheckboxChange = (e) => {
    setCheckEmail(e.target.checked);
  };

  //handle change
  const handleChange = (e) => {
    setFormContact({
      ...formContact, 
      [e.target.name]: e.target.value
    })
  }
  //handle select
  const handleSelect = (value) => {
    setFormContact({
      ...formContact,
      country: value
    })
  }
  
  //handle submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(formContact));
    router.push(`/${productId}/checkout/shipping_method`)
  };

  return (
    <>
      <Row gutter={[16, 16]} className="checkout-layout">
        <Col span={8}>
          <div className="col-left">
            <LayoutCheckout>
              <Form form={form} layout="vertical" onSubmit={handleSubmit}>
                {/* Contact Information */}
                <div className="contact">
                  <h2>Contact Information</h2>
                  <Form.Item
                    label="Email or mobile phone number"
                    name="email-mobile"
                    rules={[
                      {
                        required: checkEmail,
                        message:
                          "Please input your Email or mobile phone number",
                      },
                    ]}
                  >
                    <Input
                      allowClear
                      placeholder="Email or mobile phone number"
                      name="email"
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Checkbox checked={checkEmail} onChange={onCheckboxChange}>
                    Keep me up to date on news and exclusive offers
                  </Checkbox>
                </div>
                {/* Shipping  */}
                <div className="shipping-address">
                  <h2>Shipping address</h2>
                  <Row className="first-last-name">
                    <Col span={11}>
                      <Form.Item label="First name" style={formItemStyles}>
                        <Input
                          allowClear
                          placeholder="First name (optional)"
                          name="firstName"
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={11}>
                      <Form.Item label="Last name" style={formItemStyles}>
                        <Input
                          allowClear
                          placeholder="Last name"
                          name="lastName"
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item label="Address" style={formItemStyles}>
                    <Input allowClear placeholder="Address" name="address" onChange={handleChange}/>
                  </Form.Item>
                  <Form.Item label="City" style={formItemStyles}>
                    <Input allowClear placeholder="City" name="city" onChange={handleChange}/>
                  </Form.Item>
                  <Row className="first-last-name">
                    <Col span={11}>
                      <Form.Item
                        name="country"
                        label="Country/Region"
                        style={formItemStyles}
                      >
                        <Select placeholder="Please select a country" onChange={handleSelect}>
                          <Option value="vietnam">Viet Nam</Option>
                          <Option value="usa">U.S.A</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={11}>
                      <Form.Item label="Postal code" style={formItemStyles}>
                        <Input
                          allowClear
                          placeholder="Postal code"
                          name="postalCode"
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  {/* check box */}
                  <Checkbox>Save this information for next time</Checkbox>
                </div>

                {/* button continue */}
                <Row style={formButtonStyles}>
                  <Link href={`/${productId}/checkout/cart`}>
                    <a className="navbar-brand">
                      <LeftOutlined />
                      Cart
                    </a>
                  </Link>
                  <Button type="primary" style={buttonStyles} onClick={handleSubmit}>
                    Continue to shipping
                  </Button>
                </Row>

                <hr style={{ opacity: ".5" }} />
              </Form>
            </LayoutCheckout>
          </div>
        </Col>
        <Col span={11} className="col-right">
          <InfoProduct/>
        </Col>
      </Row>
    </>
  );
};

const formItemStyles = {
  marginBottom: "15px",
};

const formButtonStyles = {
  margin: "50px 0 80px 0",
  justifyContent: "space-between",
};

const buttonStyles = {
  fontSize: "14px",
  fontWeight: "500",
};

ContactInformation.getInitialProps = async ({ query: {id} }) => {
  const res = await fetch(`${Https}/api/products/${id}`);
  const { data } = await res.json();
  return { product: data , productId: id};
};

export default ContactInformation;
