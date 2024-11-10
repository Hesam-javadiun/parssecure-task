import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = ComponentPropsWithoutRef<"dialog">;

const Modal = function (props: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialogRef.current!;
    modal.showModal();

    return () => {
      modal.close();
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      {...props}
      className={` ${
        props.className ?? ""
      } backdrop:bg-black backdrop:opacity-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-none rounded-xl`}
    >
      {props.children}
    </dialog>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
