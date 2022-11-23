import Taboola from "@/components/Taboola";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home page</h1>
      <Taboola
        currentUrl={`https://spa-taboola.vercel.app${router.asPath}`}
        placement="Below Article Thumbnails"
      />
    </div>
  );
};

export default HomePage;
