import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { theme } from './theme';

function App() {
  return <RouterProvider router={router} theme={theme} />;
}

export default App;
