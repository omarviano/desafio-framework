import { Todo } from '../../models/todo';

export interface TodosFormPros {
  open: boolean;
  toggle(): void;
  selectedTodo?: Todo;
  onSave(todo: Todo): void;
}
