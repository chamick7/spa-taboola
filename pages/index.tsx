import Taboola from "@/components/Taboola";

const isSSR = () => typeof window === "undefined";

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      {
        <Taboola
          currentUrl={"/"}
          placement="Below Article Thumbnails Home"
          containerId="taboola-below-article-thumbnails-home"
        />
      }
    </div>
  );
};

export default HomePage;
