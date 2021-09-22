export interface ModalProps {
  title?: string;
  open: boolean;
  toggle(): void;
  size?: 'sm' | 'md' | 'lg';
}
