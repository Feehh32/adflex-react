import { useEffect } from "react";

export const usePageMetadata = ({ title }) => {
  // Page titles are managed at the page level so the SPA keeps
  // meaningful titles when navigating without a full page reload.
  useEffect(() => {
    const appName = "ADFlex";

    document.title = title ? `${title} | ${appName}` : appName;
  }, [title]);
};
