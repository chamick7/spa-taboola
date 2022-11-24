import Taboola from "@/components/Taboola";
import Script from "next/script";

const isSSR = () => typeof window === "undefined";

const HomePage = () => {
  return (
    <div>
      <Script
        type="text/javascript"
        src="/scripts/initTaboola.js"
        async
      ></Script>
      <h1>Home page</h1>
      {
        <Taboola
          currentUrl={"https://spa-taboola.vercel.app/"}
          placement="Below Article Thumbnails Home"
          containerId="taboola-below-article-thumbnails-home"
        />
      }
    </div>
  );
};

export default HomePage;
