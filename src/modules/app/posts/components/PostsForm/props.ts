import { Post } from '../../models/post';

export interface PostsFormPros {
  open: boolean;
  toggle(): void;
  selectedPost?: Post;
  onSave(post: Post): void;
}
