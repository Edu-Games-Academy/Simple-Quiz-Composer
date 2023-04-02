import PropTypes from 'prop-types';
import React, { useState } from 'react';

function NavItemButtonOptions({
  onClick,
  defaultValue,
  options = {},
  children,
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="flex">
      <button
        className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        type="button"
        onClick={() => onClick(value)}
      >
        {children}
      </button>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-100 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        {Object.keys(options).map((type, idx) => (
          <option key={idx} value={type}>
            {options[type]}
          </option>
        ))}
      </select>
    </div>
  );
}

NavItemButtonOptions.propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default NavItemButtonOptions;
