import Head from "next/head";
import { useEffect, useState } from "react";

let url = "";

interface Props {
  placement: string;
  currentUrl: string;
  containerId: string;
}

const Taboola = ({ placement, currentUrl, containerId }: Props) => {
  const onPageLoad = () => {
    console.log("onPageLoad");

    window._taboola = window._taboola || [];

    window._taboola.push({ article: "auto", url: currentUrl });

    if (currentUrl !== url) {
      window._taboola.push({ notify: "newPageLoad" });
      console.log("newPageLoad");
    }
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

    return () => {
      const nextUp = document.querySelector("#tbl-next-up");

      if (nextUp) {
        nextUp.remove();
      }
    };
  }, []);

  useEffect(() => {
    assignAd();
  }, [currentUrl]);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="/scripts/initTaboola.js"
          async
        ></script>
      </Head>
      {<div id={containerId}></div>}
    </>
  );
};

export default Taboola;
