import {
  ConfirmModalButtons,
  ConfirmModalContainer,
  ConfirmModalContentContainer,
  ConfirmModalTitle,
} from "@/components/ConfirmModal/ConfirmModal.styled";
import { Button } from "@/components/ui";

export interface ConfirmModalProps {
  isOpen: boolean;
  isPending?: boolean;
  title?: string;
  cancelButtonText?: string;
  submitButtonText?: string;
  handleClickCancelButton: () => void;
  handleClickSubmitButton: () => void;
}

export function ConfirmModal({
  isOpen,
  isPending,
  title = "Подтвердить заказ",
  cancelButtonText = "Вернуться",
  submitButtonText = "Подвердить",
  handleClickCancelButton,
  handleClickSubmitButton,
}: ConfirmModalProps) {
  return (
    <ConfirmModalContainer $isOpen={isOpen}>
      <ConfirmModalContentContainer>
        <ConfirmModalTitle>{title}</ConfirmModalTitle>
        <ConfirmModalButtons>
          <Button isLoading={isPending} onClick={handleClickSubmitButton} $color="lightGreen">
            {submitButtonText}
          </Button>
          <Button onClick={handleClickCancelButton} $color="red">
            {cancelButtonText}
          </Button>
        </ConfirmModalButtons>
      </ConfirmModalContentContainer>
    </ConfirmModalContainer>
  );
}
