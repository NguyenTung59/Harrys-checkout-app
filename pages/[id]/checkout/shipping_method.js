import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Radio, Button, Form, Input, Row, Col, Select } from "antd";
import LayoutCheckout from "./layout/LayoutCheckout";
import InfoProduct from "./InfoProduct";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  addShipping
} from "../../redux/actions/checkouts";
import {Https} from '../../../utils/port'

const { Option } = Select;

const ShippingMethod = ({ productId }) => {
  //redux
  const initContact = useSelector((state) => state.checkout.contact);
  const initShipping = useSelector(
    (state) => ({
      shipping_method: state.checkout.shipping.shipping_method,
      address: state.checkout.shipping.address,
    }),
    shallowEqual
  );
  const [shipping, setShipping] = useState(initShipping);
  const dispatch = useDispatch();
  const router = useRouter();

  const [form] = Form.useForm();
  const [checkEmail, setCheckEmail] = useState(false);
  //set value radio is init method
  const [value, setValue] = useState(initShipping.shipping_method);
  useEffect(() => {
    form.validateFields(["email-mobile"]);
  }, [checkEmail]);

  //handle change
  const handleChange = (e) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addShipping(shipping));
    router.push(`/${productId}/checkout/payment_method`);
  };

  return (
    <>
      <Row gutter={[16, 16]} className="checkout-layout">
        <Col span={8}>
          <div className="col-left">
            <LayoutCheckout>
              <Form form={form} layout="vertical" onSubmit={handleSubmit}>
                {/*Shipping contact*/}
                <div className="contact">
                  <Form.Item label="Contact" name="contact">
                    <Input
                      allowClear
                      placeholder={initContact.email}
                      name="email"
                      disabled
                    />
                  </Form.Item>
                  <Form.Item label="Ship to" name="ship">
                    <Input
                      allowClear
                      placeholder="Address"
                      name="address"
                      onChange={handleChange}
                    />
                  </Form.Item>
                </div>
                {/* Shipping  Method*/}
                <div className="shipping-method">
                  <h2>Shipping method</h2>
                  <Radio.Group
                    onChange={handleChange}
                    name="shipping_method"
                    value={value}
                  >
                    <Radio style={radioStyle} value={"standard"}>
                      Standard
                    </Radio>
                    <Radio style={radioStyle} value={"enocomy"}>
                      Enocomy
                    </Radio>
                    <Radio style={radioStyle} value={"1-2 day"}>
                      1-2 day
                    </Radio>
                  </Radio.Group>
                </div>

                {/* button continue */}
                <Row style={formButtonStyles}>
                  <Link href={`/${productId}/checkout/contact_information`}>
                    <a className="navbar-brand">
                      <LeftOutlined />
                      Return to information
                    </a>
                  </Link>
                  <Button
                    type="primary"
                    style={buttonStyles}
                    onClick={handleSubmit}
                  >
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

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const formButtonStyles = {
  margin: "50px 0 80px 0",
  justifyContent: "space-between",
};

const buttonStyles = {
  fontSize: "14px",
  fontWeight: "500",
};

ShippingMethod.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${Https}/api/products/${id}`);
  const { data } = await res.json();

  return { product: data, productId: id };
};

export default ShippingMethod;
