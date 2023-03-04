import React from 'react';

import { ReactComponent as DownloadIcon } from '@/assets/svg/download.svg';
import { ReactComponent as UploadIcon } from '@/assets/svg/upload.svg';
import { ReactComponent as UploadFileIcon } from '@/assets/svg/upload_file.svg';

import NavItem from './NavItem';

function NavBar() {
  const importJson = () => {};
  const importMoodle = () => {};
  const exportJson = () => {};
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-700 bg-gray-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-2">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            className="mr-3 h-9"
            alt="SQC Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Simple Quiz Composer
          </span>
        </a>
        <div className="order-2 flex">
          <button
            type="button"
            className="mr-0 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
            onClick={exportJson}
          >
            <DownloadIcon
              aria-hidden="true"
              className="mr-2 -ml-1 h-5 w-6"
              fill="currentColor"
              focusable="false"
              role="img"
            />
            Export to JSON
          </button>
        </div>
        <div className="order-1 flex w-auto items-center justify-between">
          <ul className="mt-0 flex flex-row space-x-8 rounded-lg border-0 bg-gray-800 p-4 text-sm font-medium">
            <NavItem onClick={importJson}>
              <UploadIcon
                aria-hidden="true"
                className="mr-2 -ml-1 h-4 w-4"
                fill="currentColor"
                focusable="false"
                role="img"
              />
              Import JSON
            </NavItem>
            <NavItem onClick={importMoodle}>
              <UploadFileIcon
                aria-hidden="true"
                className="mr-2 -ml-1 h-4 w-4"
                fill="currentColor"
                focusable="false"
                role="img"
              />
              Import Moddle GIFT
              <span className="ml-1 rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400">
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
