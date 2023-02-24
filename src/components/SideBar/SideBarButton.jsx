import PropTypes from 'prop-types';
import React from 'react';

function SideBarButton({ label, onClick, isSelected }) {
  return (
    <li>
      <button
        onClick={onClick}
        aria-selected={isSelected}
        className="w-full rounded-lg border border-gray-500 p-2 text-center text-white hover:bg-gray-700 aria-selected:border-none aria-selected:bg-gradient-to-r aria-selected:from-blue-500 aria-selected:via-blue-600 aria-selected:to-blue-700"
      >
        {label}
      </button>
    </li>
  );
}

SideBarButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default SideBarButton;
