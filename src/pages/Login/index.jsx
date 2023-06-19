import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import loginImg from '../../imgs/login.png';
import { Img } from '../../styles';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    //
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Img src={loginImg} alt="logo login" width="auto" />
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField id="input-email" type="email" label="Email" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField id="input-password" label="Mật khẩu" type="password" required fullWidth />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
            Đăng nhập
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
