import React from 'react';
import { FilesResponse } from '../components/App.types';

const FilesContext = React.createContext<FilesResponse>({
  files: [],
  folders: [],
});

export default FilesContext;
