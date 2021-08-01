import { ReactNode, useEffect, useRef } from "react";
import "./style.css";
import ReactDOM from "react-dom";
import { v4 } from "uuid";
export type ModalProps = {
  alignWindow?: "flex-end" | "flex-start" | "center";
  open: boolean;
  title?: string;
  toggle: () => void;
};

function focusModal(id: string) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.focus();
  }
}
export const ModalContent: React.FC<ModalProps> = ({ children, open, title, toggle, alignWindow }) => {
  const modalId = useRef(v4());
  useEffect(() => {
    const currentId = modalId.current;
    const appRoot = document.getElementById("app-root");
    appRoot.addEventListener("focusin", () => focusModal(currentId));
    return () => appRoot.removeEventListener("focusin", () => focusModal(currentId));
  }, []);

  useEffect(() => {
    const bodyOverflow = open ? "hidden" : "visible";
    document.body.style.overflow = bodyOverflow;
    const appRoot = document.getElementById("app-root");
    appRoot.setAttribute("aria-hidden", `${open}`);
    appRoot.setAttribute("tab-index", `${-1}`);
  }, [open]);

  return (
    <div className={`modal-wrapper ${open ? "visible" : ""}`} aria-hidden={!open} id={modalId.current}>
      <div className="overlay" onClick={toggle} tabIndex={0} aria-label="Close the modal"></div>
      <section className="content" style={{ alignSelf: alignWindow }}>
        {title && (
          <header className="modal-header header">
            <h2>{title}</h2>
          </header>
        )}
        {children}
      </section>
    </div>
  );
};

export const Modal = (props: ModalProps & { children: ReactNode }) => {
  if (props.open) {
    return ReactDOM.createPortal(<ModalContent {...props} />, document.body);
  }
  return <></>;
};
