import { useEffect } from "react";

export const usePageMetadata = ({ title }) => {
  useEffect(() => {
    const appName = "ADFlex";

    document.title = title ? `${title} | ${appName}` : appName;
  }, [title]);
};
