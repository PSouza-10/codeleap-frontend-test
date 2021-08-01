import { useEffect } from "react";
import "./style.css";
export type ModalProps = {
  alignWindow?: "flex-end" | "flex-start" | "center";
  open: boolean;
  title?: string;
  toggle: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, open, title, toggle, alignWindow }) => {
  useEffect(() => {
    const bodyOverflow = open ? "hidden" : "visible";
    document.body.style.overflow = bodyOverflow;
  }, [open]);
  return (
    <div className={`modal-wrapper ${open ? "visible" : ""}`}>
      <div className="overlay" onClick={toggle}></div>
      <section className="content" style={{ alignSelf: alignWindow }}>
        {title && <header>{title}</header>}
        {children}
      </section>
    </div>
  );
};
