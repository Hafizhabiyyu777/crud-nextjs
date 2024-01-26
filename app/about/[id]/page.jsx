import Link from "next/link";
import React from "react";

const DynamicPage = ({params}) => {
  return (
    <div>
      <h1 className="text-4xl">This is the about page with id: {params.id}</h1>
     
      <Link href="/">Home Page</Link>
    </div>
  );
};

export default DynamicPage;
