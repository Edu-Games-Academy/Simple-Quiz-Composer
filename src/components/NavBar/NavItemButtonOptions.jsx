import PropTypes from 'prop-types';
import React from 'react';

function NavItemButtonOptions({ name, onClick, options = {}, children }) {
  return (
    <li>
      <button
        id={`navMenuItemButton-${name}`}
        data-dropdown-toggle={`navMenuItem-${name}`}
        data-dropdown-placement="left-start"
        type="button"
        className="flex w-full items-center justify-between px-4 py-2 hover:bg-gray-600 hover:text-white"
      >
        {children}
      </button>
      <div
        id={`navMenuItem-${name}`}
        className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-gray-700 shadow"
      >
        <ul
          className="py-2 text-sm text-gray-200"
          aria-labelledby={`navMenuItemButton-${name}`}
        >
          {Object.keys(options).map((type, idx) => (
            <li key={idx}>
              <button
                onClick={() => onClick(type)}
                className="w-full px-4 py-2 text-left hover:bg-gray-600 hover:text-white"
              >
                {options[type]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

NavItemButtonOptions.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default NavItemButtonOptions;
