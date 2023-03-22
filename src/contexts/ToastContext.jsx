import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

import Toast from '@/components/Toast';

const ToastContext = createContext();

const useToastContext = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [showToast, setShowToast] = useState(false);
  const [type, setType] = useState('');
  const [text, setText] = useState('');

  const toastSuccess = (message) => {
    setType('success');
    setText(message);
    setShowToast(true);
  };

  const toastError = (message) => {
    setType('error');
    setText(message);
    setShowToast(true);
  };

  return (
    <ToastContext.Provider
      value={{
        toastSuccess,
        toastError,
      }}
    >
      {children}
      {showToast && (
        <Toast type={type} text={text} onClose={() => setShowToast(false)} />
      )}
    </ToastContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export { useToastContext, ToastProvider };
