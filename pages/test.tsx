import Taboola from "@/components/Taboola";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TestPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Test page</h1>
      <Taboola
        currentUrl={`https://spa-taboola.vercel.app${router.asPath}`}
        placement="Below article test"
      />
    </div>
  );
};

export default TestPage;
