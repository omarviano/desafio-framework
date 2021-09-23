import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Field from 'components/Field';
import Modal from 'components/Modal';
import { Post } from '../../models/post';
import { PostsServices } from '../../services';

import { PostsFormPros } from './props';
import { Form, Button } from './styles';

const PostsForm: React.FC<PostsFormPros> = ({
  open,
  toggle,
  selectedPost,
  onSave,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData: Post) => {
    if (selectedPost) {
      const { data } = await PostsServices.update(formData.id, formData);

      onSave(data);
    } else {
      const { data } = await PostsServices.create(formData);

      onSave(data);
    }

    toggle();
  };

  useEffect(() => {
    if (!open) reset({});
    else reset(selectedPost || undefined);
  }, [selectedPost, reset, open]);

  return (
    <Modal
      title={selectedPost ? 'Edição de post' : 'Cadastro de post'}
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
          label="Title"
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
          id="body"
          name="body"
          label="Conteúdo"
          register={register}
          rules={{
            required: {
              value: true,
              message: 'Campo obrigatório',
            },
          }}
          errors={errors}
        />

        <Button type="submit">
          {selectedPost ? 'Salvar alterações' : 'Cadastrar'}
        </Button>
      </Form>
    </Modal>
  );
};

export default PostsForm;
