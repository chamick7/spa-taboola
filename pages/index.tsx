import Taboola from "@/components/Taboola";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home page</h1>
      <Taboola currentUrl={router.asPath} placement="Below article home" />
    </div>
  );
};

export default HomePage;
