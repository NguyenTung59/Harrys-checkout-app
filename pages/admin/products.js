import React from "react";
import Link from "next/link";
import ProductTable from "../tables/ProductTable";
import Layout from "../components/Layout";
import { Button, Row } from "antd";
import NavAdmin from '../NavAdmin'

const Products = () => {
  return (
    <Layout>
      {/* <Form /> */}
      <NavAdmin/>
      <Row className="header-cms" >
        <Link href="/addProduct">
          <Button type="primary"> Add products </Button>
        </Link>
      </Row>
      {/* form cms */}
      <div className="cms">
        <div className="cms-products">
          <ProductTable />
        </div>
      </div>
    </Layout>
  );
};

export default Products;
