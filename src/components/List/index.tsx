import React from 'react';

import { List as ListElem } from './styles';

const List: React.FC = ({ children }) => {
  return <ListElem>{children}</ListElem>;
};

export default List;
