import { useCallback, useRef } from "react";

export function useModal() {
  const refStandard = useRef();

  const openModal = useCallback(() => refStandard.current.open(), []);
  const closeModal = useCallback(() => refStandard.current.close(), []);

  return { refStandard, openModal, closeModal };
}
