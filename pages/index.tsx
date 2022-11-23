import Taboola from "@/components/Taboola";

const isSSR = () => typeof window === "undefined";

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      {!isSSR() && (
        <Taboola
          currentUrl={window.location.href}
          placement="Below Article Thumbnails Home"
        />
      )}
    </div>
  );
};

export default HomePage;
