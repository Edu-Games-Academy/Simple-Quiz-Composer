import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import NavItemButtonOptions from './NavItemButtonOptions';

function NavItemButtonOptionsUpload({
  onFilesUploaded,
  name,
  options = {},
  children,
}) {
  const fileInputRef = useRef(null);
  const [value, setValue] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;

      fileInputRef.current.value = '';
      onFilesUploaded(value, data);
    };

    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <NavItemButtonOptions
      onClick={(_value) => {
        setValue(_value);
        handleButtonClick();
      }}
      name={name}
      options={options}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      {children}
    </NavItemButtonOptions>
  );
}

NavItemButtonOptionsUpload.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string),
  onFilesUploaded: PropTypes.func,
};

export default NavItemButtonOptionsUpload;
