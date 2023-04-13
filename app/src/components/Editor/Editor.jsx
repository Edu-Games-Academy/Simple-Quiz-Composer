import PropTypes from 'prop-types';
import React from 'react';

import RichtextEditor from './RichtextEditor';

function Editor({ value, onChange, richtextMode }) {
  return richtextMode ? (
    <RichtextEditor
      value={value}
      onChange={(val, delta, source) => source === 'user' && onChange(val)}
    />
  ) : (
    <textarea
      rows="3"
      className="my-2.5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

Editor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  richtextMode: PropTypes.bool,
};

export default Editor;
