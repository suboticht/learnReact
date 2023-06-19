import React from 'react';
import { useRouteError } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function PageError() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="5 / 8">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Box>
    </Box>
  );
}
