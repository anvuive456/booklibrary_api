"use client";
import { Badge, Button, Sidebar, SidebarItem, SidebarItems } from "flowbite-react";
import {
  HiBackward,
  HiBookmark, HiBookOpen,
  HiChartPie,
  HiInbox, HiOutlineBookOpen, HiOutlineChartPie, HiOutlineInbox, HiOutlineUser,
  HiShoppingBag,
  HiUser
} from "react-icons/hi2";
import { useState } from "react";
import { HiOutlineChat } from "react-icons/hi";

const AppSideBar = () => {
  const [state, setState] = useState<boolean>(false);
  return (
    <>
      <Sidebar hidden={state} collapsed={false} aria-label="Default sidebar example">
        <Sidebar.Logo href={""} img={"/vercel.svg"} imgAlt={"Admin panel"}
        >
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiOutlineChartPie}>
              Hê hê
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={HiOutlineInbox} label="3">
              Hộp thư
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiOutlineUser}>
              Người dùng
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={HiOutlineBookOpen}>
              Sách
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiOutlineChat}>
              Chat với ngừoi dùng
            </Sidebar.Item>
          </Sidebar.ItemGroup>

        </Sidebar.Items>
        <Sidebar.CTA>
          <div className="mb-3 flex items-center">
            <Badge color="warning">Beta</Badge>
          </div>
          <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
            Admin Panel đang trong quá trình phát triển
          </div>
        </Sidebar.CTA>
      </Sidebar>
    </>
  );
};

export default AppSideBar;
