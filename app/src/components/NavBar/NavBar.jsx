import React from 'react';

import { ReactComponent as ChevronLeftIcon } from '@/assets/svg/chevron_left.svg';
import { ReactComponent as DownloadIcon } from '@/assets/svg/download.svg';
import { ReactComponent as MenuIcon } from '@/assets/svg/menu.svg';
import { ReactComponent as SettingsIcon } from '@/assets/svg/settings.svg';
import { ReactComponent as UploadIcon } from '@/assets/svg/upload.svg';
import { useQuestionsContext } from '@/contexts/QuestionsContext';
import { useToastContext } from '@/contexts/ToastContext';
import { formatDateStamp } from '@/methods/datetime';
import { downloadAsFile } from '@/methods/downloadAsFile';
import gift from '@/methods/question-formats/gift';
import json from '@/methods/question-formats/json';
import qal from '@/methods/question-formats/qal';
import { Actions } from '@/reducers/questionReducer';

import NavItemButtonOptions from './NavItemButtonOptions';
import NavItemButtonOptionsUpload from './NavItemButtonOptionsUpload';

const version = 'Version ' + import.meta.env.VITE_APP_VERSION;

const modules = {
  json,
  gift,
  qal,
};
const options = {
  json: 'JSON',
  gift: 'Moodle GIFT',
  qal: 'QuestionAnswer Lines',
};

function NavBar() {
  const { questions, questionsDispatch, setSelectedQuestion } =
    useQuestionsContext();
  const { toastSuccess, toastError } = useToastContext();

  const loadQuestions = (questions) => {
    console.log('🚀 ~ file: loadQuestions ~ questions:', questions);
    questionsDispatch({
      type: Actions.REPLACE,
      questions,
    });
    setSelectedQuestion(0);
  };

  const importFile = (type, data) => {
    const module = modules[type];
    console.log('🚀 ~ importFile ~ data:', data);
    try {
      loadQuestions(module.importFrom(data));
      toastSuccess('Loaded successfully.');
    } catch (error) {
      console.error(error);
      toastError('Error loading file!');
    }
  };
  const exportFile = (type) => {
    const module = modules[type];
    downloadAsFile({
      data: module.exportTo(questions),
      fileName: `questions-${formatDateStamp(new Date())}.${
        module.fileExtension
      }`,
      fileType: module.fileType,
    });
  };

  const renderMenu = (id) => (
    <ul
      className="py-2 text-sm text-gray-200 sm:flex sm:flex-row sm:py-0"
      aria-labelledby="importExportDownloadButton"
    >
      <NavItemButtonOptionsUpload
        options={options}
        name={`upload-${id}`}
        onFilesUploaded={(type, data) => importFile(type, data)}
      >
        <ChevronLeftIcon
          aria-hidden="true"
          class="h-4 w-4 sm:hidden"
          fill="currentColor"
        />
        <span className="mx-2">Import</span>
        <UploadIcon
          aria-hidden="true"
          class="h-4 w-4"
          fill="currentColor"
          focusable="false"
          role="img"
        />
      </NavItemButtonOptionsUpload>
      <NavItemButtonOptions
        options={options}
        name={`download-${id}`}
        onClick={(type) => exportFile(type)}
      >
        <ChevronLeftIcon
          aria-hidden="true"
          class="h-4 w-4 sm:hidden"
          fill="currentColor"
        />
        <span className="mx-2">Export</span>
        <DownloadIcon
          aria-hidden="true"
          className="h-4 w-4"
          fill="currentColor"
          focusable="false"
          role="img"
        />
      </NavItemButtonOptions>
    </ul>
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b  border-gray-700 bg-gray-800">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="question-sidebar"
              data-drawer-toggle="question-sidebar"
              aria-controls="question-sidebar"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
              />
            </button>
            <h1 title={version} className="ml-2 flex items-center md:mr-24">
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                className="mr-3 h-9"
                alt="SQC Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                <span className="hidden sm:inline">Simple </span>Quiz Composer
              </span>
            </h1>
          </div>
          <div className="ml-3 flex items-center sm:hidden">
            <div>
              <button
                id="importExportDownloadButton"
                type="button"
                className="inline-flex items-center rounded-lg border border-gray-600 p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-imexport"
              >
                <span className="sr-only">Open import/export menu</span>
                <SettingsIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                />
              </button>
            </div>
            <div
              className="z-50 my-4 hidden list-none divide-y divide-gray-600 rounded bg-gray-700 text-base shadow"
              id="dropdown-imexport"
            >
              {renderMenu('mobile')}
            </div>
          </div>
          <div className="hidden items-center sm:flex">
            {renderMenu('desktop')}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
