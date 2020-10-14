import React from "react";
import Link from "next/link";
import OrderTable from "../tables/OrderTable";
import Layout from "../components/Layout";
import NavAdmin from '../NavAdmin'

const Orders = () => {
  return (
    <Layout>
      <NavAdmin/>
      <div className="cms">
        <div className="cms-products">
          <OrderTable />
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
