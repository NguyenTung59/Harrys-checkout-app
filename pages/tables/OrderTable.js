import Link from "next/link";
import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Table, Button, Popconfirm } from "antd";
import { useRouter } from "next/router";
import {Https} from '../../utils/port'

const OrderTable = () => {
  const [orders, setOrders] = useState([])

  useEffect( () => {
    const fetchData = async () => {
      const res = await fetch(`${Https}/api/orders`);
      const {data} = await res.json()
      setOrders([...data])
    }
    fetchData()
  }, [])


  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (isDeleting) {
      deleteProduct();
    }
  }, [isDeleting]);

  // delete product
  const deleteOrder = async (id) => {
    try {
      const deleted = await fetch(`${Https}/api/orders/${id}`, {
        method: "Delete",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // handle confirm product and close confirm form
  const handleDelete = async () => {
    setIsDeleting(true);
  };
  const columns = [
    {
      title: "No.",
      width: "5%",
      dataIndex: "index",
      key: "index",
      render: (key, record) => (
        <div>
          {orders.length > 0 ? orders.indexOf(record) + 1 : 1}
        </div>
      ),
    },
    {
      title: "Checkout",
      dataIndex: "_id",
      key: "_id",
      render: (id, record) => <a href={`/${record._id}/view`}> {id} </a>,
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "checkout",
      render: (date, record) => <div> {record.checkout.payment.date} </div>,
    },
    {
      title: "Placed by",
      key: "name",
      dataIndex: "checkout",
      render: (text, record) => <div> {record.checkout.contact.firstName} {record.checkout.contact.lastName} </div>,
    },
    {
      title: "Total",
      key: "price",
      dataIndex: "carts",
      render: (text, record) => <div> ${record.carts.count * record.carts.currentProduct.price} </div>,
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={orders}
      rowKey={(record) => record._id}
    />
  );
};

export default OrderTable;
