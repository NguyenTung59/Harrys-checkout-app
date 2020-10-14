import Link from "next/link";
import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Table, Button, Popconfirm } from "antd";
import { useRouter } from "next/router";

//server
// const Https = "https://harrys-app-clone.vercel.app";
const Https = "http://localhost:3000";

const UserTable = () => {
  // console.log(products)
  const [products, setProducts] = useState([])

  useEffect( async () => {
    const res = await fetch(`${Https}/api/products`);
    const data = await res.json()
    setProducts(data.data)
  }, [])

  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteProduct();
    }
  }, [isDeleting]);

  // delete product
  const deleteProduct = async (id) => {
    try {
      const deleted = await fetch(`${Https}/api/products/${id}`, {
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
          {products.length > 0 ? products.indexOf(record) + 1 : 1}
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <a href={`/${record._id}/view`}> {text} </a>,
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      render: (date) => <div> {date} </div>,
    },
    {
      title: "Act",
      width: "30%",
      align: "center",
      render: (text, record) =>
        products.length > 0 ? (
          <div>
            <Link href={`/${record._id}/edit`}>
              <Button
                style={{
                  background: "#ffc107",
                  borderColor: "#ffc107",
                }}
                // onClick={() => editUser(record.id, record)}
              >
                <i className="fa fa-edit"> Edit </i>
              </Button>
            </Link>
            <Popconfirm
              title="Definitely Delete"
              onConfirm={() => deleteProduct(record._id)}
              onClick={handleDelete}
            >
              <Button
                style={{
                  background: "#f86c6b",
                  borderColor: "#f86c6b",
                }}
              >
                <i className="fa fa-trash"> Delete </i>
              </Button>
            </Popconfirm>
          </div>
        ) : null,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey={(record) => record.name}
    />
  );
};

export default UserTable;
