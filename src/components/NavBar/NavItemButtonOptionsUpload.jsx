import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import NavItemButtonOptions from './NavItemButtonOptions';

function NavItemButtonOptionsUpload({
  onFilesUploaded,
  defaultValue,
  options = {},
  children,
}) {
  const fileInputRef = useRef(null);
  const [value, setValue] = useState(defaultValue);

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
      defaultValue={defaultValue}
      options={options}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="absolute top-0 left-0 opacity-0"
        onChange={handleFileChange}
      />
      {children}
    </NavItemButtonOptions>
  );
}

NavItemButtonOptionsUpload.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.string),
  onFilesUploaded: PropTypes.func,
};

export default NavItemButtonOptionsUpload;
