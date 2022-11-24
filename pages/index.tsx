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
      <div>
        {
          <Taboola
            currentUrl={"https://spa-taboola.vercel.app/"}
            placement="Below Article Home Thumbnails"
            containerId="taboola-below-article-home-thumbnails"
            mode="thumbnails-a"
            targetType="mix"
          />
        }
      </div>
    </div>
  );
};

export default HomePage;
