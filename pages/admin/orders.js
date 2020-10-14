import React from "react";
import Link from "next/link";
import OrderTable from "../tables/OrderTable";
import Layout from "../components/Layout";
import { Button, Row } from "antd";

const Orders = () => {
  return (
    <Layout>
      {/* <Form /> */}
      {/* <Row className="header-cms" >
        <Link href="/addProduct">
          <Button type="primary"> Add products </Button>
        </Link>
      </Row> */}
      {/* orders list */}
      <div className="cms">
        <div className="cms-products">
          <OrderTable />
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
