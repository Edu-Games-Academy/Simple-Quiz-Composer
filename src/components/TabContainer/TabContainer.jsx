import PropTypes from 'prop-types';
import React, { useState } from 'react';

function TabContainer({ tabs, children, action }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-full rounded-lg border border-gray-400 bg-white shadow">
      <ul
        className="flex divide-x divide-gray-200 rounded-lg text-center text-sm font-medium text-gray-500"
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <li key={index} className="w-full">
            <button
              type="button"
              role="tab"
              aria-controls={tab.toLowerCase()}
              aria-selected={index === selectedTab}
              onClick={() => setSelectedTab(index)}
              className="inline-block w-full bg-gray-50 p-4 first:rounded-tl-lg last:rounded-tr-lg hover:bg-gray-100 focus:outline-none aria-selected:text-blue-500"
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-200 ">
        {children.map((child, index) => (
          <div
            key={index}
            aria-hidden={index !== selectedTab}
            className="rounded-lg bg-white p-4 aria-hidden:hidden"
            role="tabpanel"
          >
            {child}
          </div>
        ))}
      </div>
      {action}
    </div>
  );
}

TabContainer.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element),
  action: PropTypes.element,
};

export default TabContainer;
