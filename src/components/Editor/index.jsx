import PropTypes from 'prop-types';
import React from 'react';

import FullEditor from './FullEditor';

function Editor({ value, onChange }) {
  return <FullEditor value={value} onChange={onChange} />;
}

Editor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Editor;