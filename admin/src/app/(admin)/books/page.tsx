"use client";

import { Alert, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import useApi from "@admin/network/api";


const Page = () => {
  const [state, setState] = useState({});
  const api = useApi();
  const getBooks = async ()=> {
    api.get();
  }

  useEffect(()=>{
    getBooks();
  },[]);


  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Mã sách</Table.HeadCell>
            <Table.HeadCell>Tên sách</Table.HeadCell>
            <Table.HeadCell>Tác giả</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body>
            <Table.Row>

            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
};


export default Page;
