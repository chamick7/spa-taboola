// import Taboola from "@/components/Taboola";

import Taboola from "@mrkutly/taboola-react-plugin";

const isSSR = () => typeof window === "undefined";

const TestPage = () => {
  return (
    <div>
      <h1>Test page</h1>
      {
        <Taboola
          currentUrl={"https://spa-taboola.vercel.app/"}
          placement="Below Article Thumbnails Home"
          containerId="taboola-below-article-thumbnails-home"
          publisher={"ndtv"}
          pageType={"article"}
          mode={"thumbnails-a"}
          targetType={"mix"}
        />
      }
    </div>
  );
};

export default TestPage;
