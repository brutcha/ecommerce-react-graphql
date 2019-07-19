import React from "react";
import Link from "next/link";

const Navigation = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);

export default Navigation;
