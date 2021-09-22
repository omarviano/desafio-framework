import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Field from 'components/Field';
import Modal from 'components/Modal';

import { Album } from '../../models/album';

import { AlbumsFormPros } from './props';
import { Form, Button } from './styles';
import { AlbumnsServices } from '../../services';

const AlbumsForm: React.FC<AlbumsFormPros> = ({
  open,
  toggle,
  selectedAlbum,
  onSave,
}) => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = async (formData: Album) => {
    if (selectedAlbum) {
      const { data } = await AlbumnsServices.update(formData.id, formData);

      onSave(data);
    } else {
      const { data } = await AlbumnsServices.create(formData);

      onSave(data);
    }

    toggle();
  };

  useEffect(() => {
    if (!open) reset({});
    else reset(selectedAlbum || undefined);
  }, [selectedAlbum, reset, open]);

  return (
    <Modal
      title={selectedAlbum ? 'Edição de álbum' : 'Cadastro de álbum'}
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
        <Field id="title" name="title" label="Álbum" register={register} />

        <Button type="submit">
          {selectedAlbum ? 'Salvar alterações' : 'Cadastrar'}
        </Button>
      </Form>
    </Modal>
  );
};

export default AlbumsForm;
