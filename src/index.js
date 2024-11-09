import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import ErrorBoundary from './errorBoundary';

window.onerror = function(message, source, lineno, colno, error) {
  console.error("Global error handler:", message, source, lineno, colno, error);
  return true; // Предотвращает отображение ошибки пользователю
};

window.addEventListener('unhandledrejection', function(event) {
  console.error("Unhandled promise rejection:", event.reason);
  event.preventDefault(); // Предотвращает отображение ошибки пользователю
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);