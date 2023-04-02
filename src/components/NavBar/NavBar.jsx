import React, { useMemo } from 'react';

import { ReactComponent as DownloadIcon } from '@/assets/svg/download.svg';
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

function NavBar() {
  const { questions, questionsDispatch, setSelectedQuestion } =
    useQuestionsContext();
  const { toastSuccess, toastError } = useToastContext();

  const modules = useMemo(
    () => ({
      json,
      gift,
      qal,
    }),
    [],
  );

  const options = useMemo(
    () => ({
      json: 'JSON',
      gift: 'Moodle GIFT',
      qal: 'QuestionAnswer Lines',
    }),
    [],
  );

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
        <NavItemButtonOptionsUpload
          options={options}
          defaultValue="json"
          onFilesUploaded={(type, data) => importFile(type, data)}
        >
          <UploadIcon
            aria-hidden="true"
            className="mr-2 -ml-1 h-4 w-4"
            fill="currentColor"
            focusable="false"
            role="img"
          />
          Import from
        </NavItemButtonOptionsUpload>
        <NavItemButtonOptions
          options={options}
          defaultValue="json"
          onClick={(type) => exportFile(type)}
        >
          <DownloadIcon
            aria-hidden="true"
            className="mr-2 -ml-1 h-4 w-4"
            fill="currentColor"
            focusable="false"
            role="img"
          />
          Export as
        </NavItemButtonOptions>
      </div>
    </nav>
  );
}

export default NavBar;
