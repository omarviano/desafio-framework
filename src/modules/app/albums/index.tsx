import React, { useEffect, useState } from 'react';

import { Album } from './models/album';
import { AlbumnsServices } from './services';

const Albumns: React.FC = () => {
  const [albums, setAlbuns] = useState<Album[]>([]);

  useEffect(() => {
    AlbumnsServices.list().then(({ data }) => setAlbuns(data));
  }, []);

  return (
    <div>
      <ul>
        {albums.map(album => (
          <li>
            {album.title}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albumns;
