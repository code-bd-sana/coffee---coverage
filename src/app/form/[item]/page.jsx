"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const item = params.item;
  console.log(item, "eita ekta item");

  return (
    <div>
      <h1>sawar form</h1>
    </div>
  );
};

export default page;
