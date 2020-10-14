import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Radio, Button, Form, Input, Row, Col, Select } from "antd";
import LayoutCheckout from "./layout/LayoutCheckout";
import InfoProduct from "./InfoProduct";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addPayment } from "../../../redux/actions/checkouts";
import {Https} from '../../../utils/port'

const { Option } = Select;

const PaymentMethod = ({productId}) => {
  console.log(productId)
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state) => state);
  const contactState = useSelector((state) => state.checkout.contact);
  const shippingState = useSelector((state) => state.checkout.shipping);

  const dateTime = new Date();
  const [value, setValue] = useState("same as shipping address");

  //payment initial
  const [payment, setPayment] = useState({
    payment_method: value,
    date: dateTime.toLocaleString("en-GB", { timeZone: "UTC" }),
  });

  const [form] = Form.useForm();
  const [checkEmail, setCheckEmail] = useState(false);

  useEffect(() => {
    form.validateFields(["email-mobile"]);
  }, [checkEmail]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  //useEffect
  useEffect(() => {
    if (isSubmitting) {
      // console.log(state);
      alert("Success");
      createOrder();
    } else {
      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  const onChange = (e) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setPayment({
      ...payment,
      date: dateTime.toLocaleString("en-GB", { timeZone: "UTC" }),
    });

    dispatch(addPayment(payment));
    setIsSubmitting(true);
  };

  // create product
  const createOrder = async () => {
    try {
      const res = await fetch(`${Https}/api/orders`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      router.push(`/admin/orders`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row gutter={[16, 16]} className="checkout-layout">
        <Col span={8}>
          <div className="col-left">
            <LayoutCheckout>
              <Form form={form} layout="vertical" onSubmit={handleSubmit}>
                {/*Shipping + Contact*/}
                <div className="contact">
                  <Form.Item label="Contact" name="contact">
                    <Input
                      allowClear
                      placeholder={contactState.email}
                      disabled
                    />
                  </Form.Item>
                  <Form.Item label="Ship to" name="ship">
                    <Input
                      allowClear
                      placeholder={shippingState.address}
                      disabled
                    />
                  </Form.Item>
                  <Form.Item label="Method" name="method">
                    <Input
                      allowClear
                      placeholder={shippingState.shipping_method}
                      disabled
                    />
                  </Form.Item>
                </div>

                {/* Payment  */}
                <div className="payment">
                  <div>
                    <h2>Payment</h2>
                    <p>All transactions are secure and encrypted.</p>
                  </div>
                  <div>Cash on Delivery (COD)</div>
                </div>

                {/* Billing address*/}
                <div className="billing-address">
                  <h2>Billing address</h2>
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    name="payment_method"
                  >
                    <Radio
                      style={radioStyle}
                      value={"same as shipping address"}
                    >
                      Same as shipping address
                    </Radio>
                    <Radio
                      style={radioStyle}
                      value={"use a different billing address"}
                    >
                      Use a different billing address
                    </Radio>
                  </Radio.Group>
                </div>

                {/* button continue */}
                <Row style={formButtonStyles}>
                  <Link href={`/${productId}/checkout/shipping_method`}>
                    <a className="navbar-brand">
                      <LeftOutlined />
                      Return to shipping
                    </a>
                    </Link>
                  <Button
                    type="primary"
                    style={buttonStyles}
                    onClick={handleSubmit}
                  >
                    Complete order
                  </Button>
                </Row>

                <hr style={{ opacity: ".5" }} />
              </Form>
            </LayoutCheckout>
          </div>
        </Col>
        <Col span={11} className="col-right">
          <InfoProduct />
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

PaymentMethod.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${Https}/api/products/${id}`);
  const { data } = await res.json();

  return { product: data, productId: id };
};

export default PaymentMethod;
