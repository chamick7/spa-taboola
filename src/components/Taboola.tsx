import Head from "next/head";
import { useEffect, useState } from "react";

let url = "";

interface Props {
  placement: string;
  currentUrl: string;
}

const Taboola = ({ placement, currentUrl }: Props) => {
  const getSaltContainerId = () => {
    const salt = `${placement}-${Math.floor(Math.random() * 1000000)}`;

    return salt.toLowerCase().split(" ").join("-");
  };

  const [containerId, setContainerId] = useState<string>(getSaltContainerId());

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
      container: containerId,
      placement: placement,
      target_type: "mix",
    });

    if (currentUrl !== url) {
      window._taboola.push({ notify: "newPageLoad" });
      console.log("newPageLoad");
    }
  };

  console.log("containerId ", containerId);

  useEffect(() => {
    onPageLoad();

    assignAd();

    window._taboola.push({ flush: true });
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
      <div id={containerId}></div>
    </>
  );
};

export default Taboola;
