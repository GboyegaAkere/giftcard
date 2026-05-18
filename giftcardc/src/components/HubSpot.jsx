import { useEffect } from "react";

export default function HubSpot() {
  useEffect(() => {
    const hubId = import.meta.env.VITE_HUBSPOT_ID; // or process.env.REACT_APP_HUBSPOT_ID

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "hs-script-loader";
    script.async = true;
    script.defer = true;
    script.src = `//js.hs-scripts.com/${hubId}.js`;

    document.head.appendChild(script);

    return () => {
      // cleanup
      const existing = document.getElementById("hs-script-loader");
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return null;
}