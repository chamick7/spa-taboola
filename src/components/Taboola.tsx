import Head from "next/head";
import { useEffect, useState } from "react";

let url = "";

interface Props {
  placement: string;
  currentUrl: string;
}

const Taboola = ({ placement, currentUrl }: Props) => {
  const [containerId, setContainerId] = useState<string>();

  const getSaltContainerId = () => {
    const salt = `${placement}-${Math.floor(Math.random() * 1000000)}`;

    return salt.toLowerCase().split(" ").join("-");
  };

  const onPageLoad = () => {
    console.log("onPageLoad");

    window._taboola = window._taboola || [];

    window._taboola.push({ article: "auto", url: currentUrl });

    if (currentUrl !== url) {
      window._taboola.push({ notify: "newPageLoad" });
      console.log("newPageLoad");
    }

    setContainerId(getSaltContainerId());
  };

  const assignAd = () => {
    console.log("assignAd");

    // *Global* command queue for the page
    window._taboola = window._taboola || [];

    // For each placement, pass *your* param values, as provided by Taboola:
    window._taboola.push({
      mode: "thumbnails-a",
      container: containerId,
      placement: placement,
      target_type: "mix",
    });

    window._taboola.push({ flush: true });
  };

  console.log("containerId ", containerId);
  console.log("currentUrl ", currentUrl);

  useEffect(() => {
    onPageLoad();
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
      {containerId && <div id={containerId}></div>}
      {containerId && assignAd()}
    </>
  );
};

export default Taboola;
