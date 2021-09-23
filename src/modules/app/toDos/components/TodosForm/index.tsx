import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Field from 'components/Field';
import Modal from 'components/Modal';

import { Todo } from '../../models/todo';
import { TodosServices } from '../../services';

import { TodosFormPros } from './props';
import { Button, Form } from './styles';

const TodosForm: React.FC<TodosFormPros> = ({
  open,
  toggle,
  selectedTodo,
  onSave,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData: Todo) => {
    if (selectedTodo) {
      const { data } = await TodosServices.update(formData.id, formData);

      onSave(data);
    } else {
      const { data } = await TodosServices.create(formData);

      onSave(data);
    }

    toggle();
  };

  useEffect(() => {
    if (!open) reset({});
    else reset(selectedTodo || undefined);
  }, [selectedTodo, reset, open]);

  return (
    <Modal
      title={selectedTodo ? 'Edição de tarefa' : 'Cadastro de ttarefa'}
      open={open}
      toggle={toggle}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field id="id" name="id" label="ID" register={register} readOnly />
        <Field
          id="userId"
          name="userId"
          label="Usuário"
          register={register}
          defaultValue="1"
          readOnly
        />
        <Field
          id="title"
          name="title"
          label="Tarefa"
          register={register}
          rules={{
            required: {
              value: true,
              message: 'Campo obrigatório',
            },
          }}
          errors={errors}
        />
        <Field
          id="completed"
          name="completed"
          type="checkbox"
          label="Finalizada"
          register={register}
          visible={!selectedTodo}
        />

        <Button type="submit">
          {selectedTodo ? 'Salvar alterações' : 'Cadastrar'}
        </Button>
      </Form>
    </Modal>
  );
};

export default TodosForm;
