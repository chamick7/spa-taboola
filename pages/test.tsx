import Taboola from "@/components/Taboola";

const isSSR = () => typeof window === "undefined";

const TestPage = () => {
  return (
    <div>
      <h1>Test page</h1>
      {
        <Taboola
          currentUrl={"https://spa-taboola.vercel.app/test"}
          placement="Below Article Thumbnails test"
          containerId="taboola-below-article-thumbnails-test"
        />
      }
    </div>
  );
};

export default TestPage;
