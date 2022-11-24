import { useEffect, useState } from "react";

let prevUrl = "";

interface Props {
  placement: string;
  currentUrl: string;
  containerId: string;
  targetType: string;
  mode: string;
}

const Taboola = ({
  placement,
  currentUrl,
  containerId,
  targetType,
  mode,
}: Props) => {
  const [shouldLoadComponent, setShouldLoadComponent] = useState(false);

  const isNewPage = prevUrl !== currentUrl && prevUrl !== "";

  const loadAd = () => {
    window._taboola = window._taboola || [];
    window._taboola.push({
      mode: mode,
      container: containerId,
      placement: placement,
      target_type: targetType,
    });

    window._taboola = window._taboola || [];
    window._taboola.push({ flush: true });
  };

  useEffect(() => {
    if (shouldLoadComponent) loadAd();
  }, [shouldLoadComponent]);

  useEffect(() => {
    if (isNewPage) {
      window._taboola = window._taboola || [];
      window._taboola.push({ notify: "newPageLoad" });
    }
    window._taboola = window._taboola || [];
    window._taboola.push({ article: "auto", url: currentUrl });

    setShouldLoadComponent(true);
    prevUrl = currentUrl;
  }, []);

  return <div id={containerId}></div>;
};

export default Taboola;
