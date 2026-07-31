import PropTypes from "prop-types";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalFocus } from "../../hooks/useModalFocus";

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl",
};

const BaseModal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnEsc = true,
  closeOnOverlay = true,
  showCloseButton = true,
  className = "",
  contentClassName = "",
}) => {
  const modalRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();
  useModalFocus({
    isOpen,
    modalRef,
  });

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeydown = (event) => {
      if (event.key === "Escape" && closeOnEsc) {
        onClose();
        return;
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [closeOnEsc, isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayMouseDown = (event) => {
    if (closeOnOverlay && event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm print:hidden"
      onMouseDown={handleOverlayMouseDown}
    >
      <section
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className={`w-full ${
          sizeClasses[size] ?? sizeClasses.md
        } rounded-lg border border-gray-dark bg-gray-darker text-light-gray shadow-2xl outline-none ${className}`}
      >
        {(title || description || showCloseButton) && (
          <header className="flex items-start justify-between gap-4 border-b border-gray-dark px-5 py-4">
            <div className="flex flex-col gap-1">
              {title && (
                <h2 id={titleId} className="text-lg font-semibold text-white">
                  {title}
                </h2>
              )}
              {description && (
                <p
                  id={descriptionId}
                  className="text-sm leading-relaxed text-gray-medium"
                >
                  {description}
                </p>
              )}
            </div>

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                aria-hidden="true"
                className="focus-visible flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-gray-medium transition hover:bg-gray-dark hover:text-light-gray cursor-pointer"
                aria-label="Fechar modal"
              >
                X
              </button>
            )}
          </header>
        )}

        <div className={`px-5 py-4 ${contentClassName}`}>{children}</div>

        {footer && (
          <footer className="flex flex-wrap justify-end gap-3 border-t border-gray-dark px-5 py-4">
            {footer}
          </footer>
        )}
      </section>
    </div>,
    document.body,
  );
};

BaseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
  closeOnEsc: PropTypes.bool,
  closeOnOverlay: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

export default BaseModal;
