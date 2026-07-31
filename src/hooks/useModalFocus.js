import { useEffect } from "react";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export const useModalFocus = ({ isOpen, modalRef }) => {
  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement;

    const firstFocusableElement =
      modalRef.current?.querySelector(focusableSelector);

    firstFocusableElement?.focus?.() || modalRef.current?.focus?.();

    return () => {
      previousActiveElement?.focus?.();
    };
  }, [isOpen, modalRef]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key !== "Tab") return;

      const focusableElements =
        modalRef.current?.querySelectorAll(focusableSelector);

      if (!focusableElements?.length) {
        event.preventDefault();
        modalRef.current?.focus?.();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, modalRef]);
};
