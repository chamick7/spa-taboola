import Taboola from "@/components/Taboola";
import Script from "next/script";

const isSSR = () => typeof window === "undefined";

const TestPage = () => {
  return (
    <div>
      <Script
        type="text/javascript"
        src="/scripts/initTaboola.js"
        async
      ></Script>
      <h1>Test page</h1>
      {
        <Taboola
          currentUrl={"https://spa-taboola.vercel.app/test"}
          placement="Below Article test Thumbnails"
          containerId="taboola-below-article-test-thumbnails"
        />
      }
    </div>
  );
};

export default TestPage;
