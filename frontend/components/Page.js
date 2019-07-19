import React from "react";
import Header from "./Header.js";
import Meta from "./Meta.js";

const Page = ({ children }) => (
  <div>
    <Meta />
    <Header />
    {children}
  </div>
);

export default Page;
