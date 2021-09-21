import { AxiosResponse } from 'axios';
import { destroy, get, post, put } from 'config/axios';

import { Post } from '../models/post';

export const PostsServices = {
  create: (postData: Post): Promise<AxiosResponse<Post>> =>
    post('/posts', postData),

  list: (): Promise<AxiosResponse<Post[]>> => get('/posts'),

  get: (id: number): Promise<AxiosResponse<Post>> =>
    get('/posts/', { params: { id } }),

  update: (id: number, postData: Post): Promise<AxiosResponse<Post>> =>
    put(`/posts/${id}`, postData),

  delete: (id: number): Promise<AxiosResponse> => destroy(`/posts/${id}`),
};
