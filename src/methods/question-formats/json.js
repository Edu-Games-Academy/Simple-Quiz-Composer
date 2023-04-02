const importFrom = (text) => {
  return JSON.parse(text);
};

const exportTo = (questions) => {
  return JSON.stringify(questions, null, 2);
};

const fileType = 'application/json';
const fileExtension = 'json';

export default { importFrom, exportTo, fileType, fileExtension };
