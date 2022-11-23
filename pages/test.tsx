import Taboola from "@/components/Taboola";
import { useRouter } from "next/router";

const TestPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Test page</h1>
      <Taboola currentUrl={router.asPath} placement="Below article test" />
    </div>
  );
};

export default TestPage;
