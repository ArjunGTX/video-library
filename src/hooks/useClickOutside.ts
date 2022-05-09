import React, { RefObject, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  refObj: RefObject<T>,
  handler: (e: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent): any => {
      if (!refObj.current || refObj.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [refObj, handler]);
};
