import React from 'react';
import ReactQuill from 'react-quill';

import { modules } from './config';

function RichtextEditor(props) {
  return <ReactQuill theme="snow" modules={modules} {...props} />;
}

export default RichtextEditor;
