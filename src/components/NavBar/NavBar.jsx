import React from 'react';

import ExportJsonButton from './ExportJsonButton';
import NavItem from './NavItem';

function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-700 bg-gray-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-2">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} className="mr-3 h-9" alt="SQC Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Simple Quiz Composer
          </span>
        </a>
        <div className="order-2 flex">
          <ExportJsonButton />
        </div>
        <div className="order-1 flex w-full w-auto items-center justify-between">
          <ul className="mt-0 flex flex-row space-x-8 rounded-lg border-0 bg-gray-800 p-4 text-sm font-medium">
            <NavItem>Import JSON</NavItem>
            <NavItem>
              Import Moddle GIFT{' '}
              <span className="mr-2 rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400">
                Beta
              </span>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
