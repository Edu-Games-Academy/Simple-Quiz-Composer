import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import NavItem from './NavItem';

function NavItemUpload({ onFilesUploaded, children }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;

      fileInputRef.current.value = '';
      onFilesUploaded(data);
    };

    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <NavItem onClick={handleButtonClick}>
      <input
        type="file"
        ref={fileInputRef}
        className="absolute top-0 left-0 opacity-0"
        onChange={handleFileChange}
      />
      {children}
    </NavItem>
  );
}

NavItemUpload.propTypes = {
  children: PropTypes.node,
  onFilesUploaded: PropTypes.func,
};

export default NavItemUpload;
