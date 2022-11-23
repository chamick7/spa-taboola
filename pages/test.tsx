import Taboola from "@/components/Taboola";

const isSSR = () => typeof window === "undefined";

const TestPage = () => {
  return (
    <div>
      <h1>Test page</h1>
      {!isSSR() && (
        <Taboola
          currentUrl={window.location.href}
          placement="Below Article Thumbnails test"
        />
      )}
    </div>
  );
};

export default TestPage;
