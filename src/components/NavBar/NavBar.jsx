import React from 'react';

import { ReactComponent as DownloadIcon } from '@/assets/svg/download.svg';
import { ReactComponent as UploadIcon } from '@/assets/svg/upload.svg';
import { ReactComponent as UploadFileIcon } from '@/assets/svg/upload_file.svg';
import { useQuestionsContext } from '@/contexts/QuestionsContext';
import { useToastContext } from '@/contexts/ToastContext';
import { formatDateStamp } from '@/methods/datetime';
import { downloadAsFile } from '@/methods/downloadAsFile';
import { gift2json, json2gift } from '@/methods/moodle';
import { Actions } from '@/reducers/questionReducer';

import NavItem from './NavItem';
import NavItemUpload from './NavItemUpload';

const version = 'Version ' + import.meta.env.VITE_APP_VERSION;

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

  const importJson = (data) => {
    console.log('🚀 ~ importJson ~ data:', data);
    try {
      const questions = JSON.parse(data);
      loadQuestions(questions);
      toastSuccess('Loaded successfully.');
    } catch (error) {
      console.error(error);
      toastError('Error loading file!');
    }
  };
  const importMoodle = (data) => {
    console.log('🚀 ~ importMoodle ~ data:', data);
    try {
      const questions = gift2json(data);
      loadQuestions(questions);
      toastSuccess('Loaded successfully.');
    } catch (error) {
      console.error(error);
      toastError('Error loading file!');
    }
  };
  const exportJson = () => {
    downloadAsFile({
      data: JSON.stringify(questions, null, 2),
      fileName: `questions-${formatDateStamp(new Date())}.json`,
      fileType: 'application/json',
    });
  };
  const exportMoodle = () => {
    const data = json2gift(questions);
    downloadAsFile({
      data,
      fileName: `questions-${formatDateStamp(new Date())}.txt`,
    });
  };
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-700 bg-gray-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-2">
        <h1 title={version} className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            className="mr-3 h-9"
            alt="SQC Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Simple Quiz Composer
          </span>
        </h1>
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
            Export as JSON
          </button>
        </div>
        <div className="order-1 flex w-auto items-center justify-between">
          <ul className="mt-0 flex flex-row space-x-8 rounded-lg border-0 bg-gray-800 p-4 text-sm font-medium">
            <NavItemUpload onFilesUploaded={importJson}>
              <UploadIcon
                aria-hidden="true"
                className="mr-2 -ml-1 h-4 w-4"
                fill="currentColor"
                focusable="false"
                role="img"
              />
              Import JSON
            </NavItemUpload>
            <NavItemUpload onFilesUploaded={importMoodle}>
              <UploadFileIcon
                aria-hidden="true"
                className="mr-2 -ml-1 h-4 w-4"
                fill="currentColor"
                focusable="false"
                role="img"
              />
              Import Moddle GIFT
            </NavItemUpload>
            <NavItem onClick={exportMoodle}>
              <DownloadIcon
                aria-hidden="true"
                className="mr-2 -ml-1 h-4 w-4"
                fill="currentColor"
                focusable="false"
                role="img"
              />
              Export as Moddle GIFT
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
