import { AxiosResponse } from 'axios';
import { destroy, get, post, put } from 'config/axios';

import { Album } from '../models/album';

export const AlbumnsServices = {
  create: (album: Album): Promise<AxiosResponse<Album>> =>
    post('/albums', album),

  list: (): Promise<AxiosResponse<Album[]>> => get('/albums'),

  get: (id: number): Promise<AxiosResponse<Album>> =>
    get('/albums', { params: { id } }),

  update: (id: number, album: Album): Promise<AxiosResponse<Album>> =>
    put(`/albums/${id}`, album),

  delete: (id: number): Promise<AxiosResponse> => destroy(`/albums/${id}`),
};
