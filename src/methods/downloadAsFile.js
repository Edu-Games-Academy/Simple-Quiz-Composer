export const downloadAsFile = ({
  data,
  fileName = 'data.txt',
  fileType = 'text/plain',
}) => {
  const blob = new Blob([data], { type: fileType });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;

  link.click();
  URL.revokeObjectURL(url);
};
