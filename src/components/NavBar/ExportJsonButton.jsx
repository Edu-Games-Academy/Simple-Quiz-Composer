import React from 'react';

import { ReactComponent as DownloadIcon } from '@/assets/svg/download.svg';

function ExportJsonButton() {
  return (
    <button
      type="button"
      className="mr-0 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
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
  );
}

export default ExportJsonButton;
