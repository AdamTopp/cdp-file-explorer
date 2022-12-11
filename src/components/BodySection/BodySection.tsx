import React from 'react';
import { BodySectionWrapper } from './BodySection.styles';
import FavouritesPanel from './FavouritesPanel/FavouritesPanel';
import FolderPanel from './FolderPanel/FolderPanel';

const BodySection = () => {
  return (
    <BodySectionWrapper>
      <FavouritesPanel />
      <FolderPanel />
    </BodySectionWrapper>
  );
};

export default BodySection;
