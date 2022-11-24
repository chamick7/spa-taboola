import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

let prevUrl = "";

interface Props {
  placement: string;
  currentUrl: string;
  containerId: string;
}

const Taboola = ({ placement, currentUrl, containerId }: Props) => {
  const [shouldLoadComponent, setShouldLoadComponent] = useState(false);

  const isNewPage = prevUrl !== currentUrl && prevUrl !== "";

  const isSSR = typeof window === "undefined";

  const loadComp = () => {
    window._taboola = window._taboola || [];
    window._taboola.push({
      mode: "thumbnails-a",
      container: containerId,
      placement: placement,
      target_type: "mix",
    });

    window._taboola = window._taboola || [];
    window._taboola.push({ flush: true });

    window._taboolaList = window._taboolaList || [];
    window._taboolaList.push({
      mode: "thumbnails-a",
      container: containerId,
      placement: placement,
      target_type: "mix",
    });

    window._taboolaList = window._taboolaList || [];
    window._taboolaList.push({ flush: true });
  };

  useEffect(() => {
    if (shouldLoadComponent) loadComp();
  }, [shouldLoadComponent]);

  useEffect(() => {
    if (isNewPage) {
      window._taboola = window._taboola || [];
      window._taboola.push({ notify: "newPageLoad" });
      window._taboolaList = window._taboolaList || [];
      window._taboolaList.push({ notify: "newPageLoad" });
    }

    window._taboola = window._taboola || [];
    window._taboola.push({ article: "auto", url: currentUrl });
    window._taboolaList = window._taboolaList || [];
    window._taboolaList.push({ article: "auto", url: currentUrl });
    console.log("prev url ", prevUrl);
    console.log("push currentUrl ", currentUrl);

    setShouldLoadComponent(true);

    prevUrl = currentUrl;
  }, []);

  return (
    <>
      {<div id={containerId}></div>}
      {/* {!isSSR && loadComp()} */}
    </>
  );
};

export default Taboola;
