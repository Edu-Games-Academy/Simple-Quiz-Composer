import PropTypes from 'prop-types';
import React from 'react';

function NavItem({ onClick, children }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="inline-flex items-center rounded border-gray-700 p-0 text-gray-400 hover:bg-transparent hover:text-white"
      >
        {children}
      </button>
    </li>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default NavItem;
