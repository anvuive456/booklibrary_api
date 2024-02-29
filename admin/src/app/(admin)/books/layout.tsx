import { Sidebar, SidebarItem } from "flowbite-react";
import AppSideBar from "@admin/components/AppSideBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Trang của (admin)',
  description:'Hê hê gei'
}
export default function Layout({
                                 children
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='h-screen flex flex-row'>
        <AppSideBar/>
        <div className=" p-4">
          {children}
        </div>
      </div>

    </>
  );
}
