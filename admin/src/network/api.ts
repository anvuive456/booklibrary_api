import { useEffect, useState } from "react";

const useApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Lấy token từ local storage
    const token = localStorage.getItem("accessToken");

    // Kiểm tra nếu có token, thì thêm Authorization header
    const headers = new Headers();
   if(token) {
     headers.set('Authorization', `Bearer ${token}`);
   }
    headers.set('Content-Type', 'application/json');

    // Thực hiện fetch với cấu hình authorization bearer nếu có token
    const fetchData = async () => {
      try {
        const response = await fetch("https://example.com/api/data", {
          headers
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Gọi fetchData khi component mount
    fetchData();
  }, []); // useEffect chỉ chạy một lần khi component mount

  return data;
};

export default useApi;
