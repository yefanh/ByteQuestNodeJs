// bytequest/app/details/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // 使用 useParams 解包动态路由参数
import axios from "axios";

const DetailsPage = () => {
  const params = useParams(); // 获取路由参数
  const id = params.id; // 解包 id
  const [details, setDetails] = useState<any | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">{details.title}</h1>
      <p>{details.body}</p>
      <p className="text-gray-500 mt-4">ID: {id}</p>
    </div>
  );
};

export default DetailsPage;
