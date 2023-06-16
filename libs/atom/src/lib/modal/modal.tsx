import { useRef, MouseEvent, useEffect } from 'react'
import { TModal } from './modal.type'
import { SModal } from './modal.style'

export const Modal = ({ children, show, closeModal = () => {} }: TModal) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  const handleCloseModal = (e: MouseEvent<HTMLDialogElement>) => {
    e.stopPropagation()

    if (modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect()
      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width

      if (!isInDialog) {
        modalRef.current.close()
        closeModal()
      }
    }
  }

  useEffect(() => {
    if (modalRef.current && show) {
      modalRef.current.showModal()
    }
  }, [show])

  useEffect(() => {
    if (modalRef.current && show) {
      modalRef.current.addEventListener('cancel', closeModal)
    }

    return () => {
      if (modalRef.current && show) {
        modalRef.current.removeEventListener('cancel', closeModal)
      }
    }
  }, [])

  return (
    <SModal onClick={handleCloseModal} ref={modalRef}>
      {children}
    </SModal>
  )
}
