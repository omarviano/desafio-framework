import React, { useEffect, useState } from 'react';

import useModal from 'hooks/modal';

import { List } from 'components/List/styles';
import ListItemWithActionButtons from 'components/ListItemWithActionButtons';
import CreateButton from 'components/CreateButton';
import AlbumsForm from './components/AlbumsForm';

import { Album } from './models/album';
import { AlbumnsServices } from './services';

const Albums: React.FC = () => {
  const [albums, setAlbuns] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album>();
  const { open, toggle } = useModal();

  const handleClickCreate = () => {
    setSelectedAlbum(undefined);
    toggle();
  };

  const handleClickEdit = (album: Album) => {
    setSelectedAlbum(album);
    toggle();
  };

  const handleClickDelete = async (id: number) => {
    if (confirm('O album selecionando será excluído')) {
      await AlbumnsServices.delete(id);

      setAlbuns(state => state.filter(item => item.id !== id));
    }
  };

  const onSave = (album: Album) => {
    if (selectedAlbum) {
      setAlbuns(state =>
        state.map(item => {
          if (item.id === selectedAlbum.id) return album;

          return item;
        }),
      );
    } else {
      setAlbuns(state => [album, ...state]);
    }
  };

  useEffect(() => {
    AlbumnsServices.list().then(({ data }) => setAlbuns(data));
  }, []);

  return (
    <>
      <CreateButton onClick={handleClickCreate}>Criar álbum</CreateButton>

      <List>
        {albums.map(album => (
          <ListItemWithActionButtons
            key={album.id}
            onClickEdit={() => handleClickEdit(album)}
            onClickDelete={() => handleClickDelete(album.id)}
          >
            {album.title}
          </ListItemWithActionButtons>
        ))}

        <AlbumsForm
          open={open}
          toggle={toggle}
          selectedAlbum={selectedAlbum}
          onSave={onSave}
        />
      </List>
    </>
  );
};

export default Albums;
