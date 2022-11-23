import Head from "next/head";
import { useEffect, useState } from "react";

let currentUrl = "";

interface Props {
  placement: string;
  currentUrl: string;
}

const Taboola = ({ placement, currentUrl }: Props) => {
  const [containerId, setContainerId] = useState<string>("");

  const getSaltContainerId = () => {
    const salt = `${placement}-${Math.floor(Math.random() * 1000000)}`;

    return salt.toLowerCase().split(" ").join("-");
  };

  const onPageLoad = () => {
    window._taboola = window._taboola || [];

    window._taboola.push({ article: "auto", url: currentUrl });

    setContainerId(getSaltContainerId());
  };

  const assignAd = () => {
    // *Global* command queue for the page
    window._taboola = window._taboola || [];

    // For each placement, pass *your* param values, as provided by Taboola:
    window._taboola.push({
      mode: "thumbnails-a",
      container: "taboola-below-article-thumbnails",
      placement: placement,
      target_type: "mix",
    });

    console.log(window._taboola);
  };

  useEffect(() => {
    onPageLoad();

    assignAd();

    window._taboola.push({ flush: true });

    return () => {
      window._taboola.push({ notify: "newPageLoad" });
    };
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="/scripts/initTaboola.js"
          async
        ></script>
      </Head>
      <div id="taboola-below-article-thumbnails"></div>
    </>
  );
};

export default Taboola;
