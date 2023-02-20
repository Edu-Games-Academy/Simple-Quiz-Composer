import PropTypes from 'prop-types';
import React from 'react';

function SideBarButton({ label, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="w-full rounded-lg border border-gray-500 p-2 text-center text-white hover:bg-gray-700"
      >
        {label}
      </button>
    </li>
  );
}

SideBarButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default SideBarButton;
