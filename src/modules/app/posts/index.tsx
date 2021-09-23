import React, { useEffect, useState } from 'react';

import useModal from 'hooks/modal';

import CreateButton from 'components/CreateButton';
import { List } from 'components/List/styles';
import ListItemWithActionButtons from 'components/ListItemWithActionButtons';
import PostsForm from './components/PostsForm';

import { Post } from './models/post';
import { PostsServices } from './services';

import { PostTitle, PostBody } from './styles';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post>();
  const { open, toggle } = useModal();

  const handleClickCreate = () => {
    setSelectedPost(undefined);
    toggle();
  };

  const handleClickEdit = (post: Post) => {
    setSelectedPost(post);
    toggle();
  };

  const handleClickDelete = async (id: number) => {
    if (confirm('O post selecionando será excluído')) {
      await PostsServices.delete(id);

      setPosts(state => state.filter(item => item.id !== id));
    }
  };

  const onSave = (post: Post) => {
    if (selectedPost) {
      setPosts(state =>
        state.map(item => {
          if (item.id === selectedPost.id) return post;

          return item;
        }),
      );
    } else {
      setPosts(state => [post, ...state]);
    }
  };

  useEffect(() => {
    PostsServices.list().then(({ data }) => setPosts(data));
  }, []);

  return (
    <>
      <CreateButton onClick={handleClickCreate}>Criar post</CreateButton>

      <List>
        {posts.map(post => (
          <ListItemWithActionButtons
            key={post.id}
            onClickEdit={() => handleClickEdit(post)}
            onClickDelete={() => handleClickDelete(post.id)}
          >
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
          </ListItemWithActionButtons>
        ))}

        <PostsForm
          open={open}
          toggle={toggle}
          selectedPost={selectedPost}
          onSave={onSave}
        />
      </List>
    </>
  );
};

export default Posts;
