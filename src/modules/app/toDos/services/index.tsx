import { AxiosResponse } from 'axios';
import { destroy, get, post, put } from 'config/axios';

import { Todo } from '../models/todo';

export const TodosServices = {
  create: (todo: Todo): Promise<AxiosResponse<Todo>> => post('/todos', todo),

  list: (): Promise<AxiosResponse<Todo[]>> => get('/todos'),

  get: (userId: number): Promise<AxiosResponse<Todo>> =>
    get('/todos', { params: { userId } }),

  update: (id: number, todo: Todo): Promise<AxiosResponse<Todo>> =>
    put(`/todos/${id}`, todo),

  delete: (id: number): Promise<AxiosResponse> => destroy(`/albums/${id}`),
};
