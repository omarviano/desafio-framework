import { Album } from '../../models/album';

export interface AlbumsFormPros {
  open: boolean;
  toggle(): void;
  selectedAlbum?: Album;
  onSave(album: Album): void;
}
