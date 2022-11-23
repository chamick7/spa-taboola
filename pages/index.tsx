import Taboola from "@/components/Taboola";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home page</h1>
      <Taboola
        currentUrl={router.asPath}
        placement="Below Article Thumbnails"
      />
    </div>
  );
};

export default HomePage;
