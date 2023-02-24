import PropTypes from 'prop-types';
import React from 'react';
import ReactQuill from 'react-quill';

import { modules } from './config';

function Editor({ value, onChange }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
    />
  );
}

Editor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Editor;
