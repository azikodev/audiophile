import React from "react";
import { Footer } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

const url = "/products";

export const loader = async () => {
  const req = await customFetch(url);
  const products = req.data.data;
  return { products };
};

function Trash() {
  const { products } = useLoaderData();
  Footer("trash");
  return <div>Trash</div>;
}

export default Trash;
