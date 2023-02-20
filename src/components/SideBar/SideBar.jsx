import React from 'react';

import SideBarButton from './SideBarButton';

function SideBar() {
  return (
    <aside
      className="fixed top-0 left-0 z-40 h-screen w-64 border-r border-gray-700 bg-gray-800 pt-20 transition-transform"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-gray-800 px-3 pb-4">
        <ul className="grid grid-cols-3 gap-4">
          <SideBarButton label="1" />
          <SideBarButton label="22" />
          <SideBarButton label="333" />
          <SideBarButton label="4444" />
          <SideBarButton label="+" />
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
