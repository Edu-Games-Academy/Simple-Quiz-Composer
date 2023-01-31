import { modules } from "./config";
import PropTypes from "prop-types";
import React from "react";
import ReactQuill from "react-quill";

function FullEditor({ value, onChange }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
    />
  );
}

FullEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FullEditor;
