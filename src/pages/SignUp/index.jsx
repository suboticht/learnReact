import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signupStaff } from '../../api';
import { useHandleError } from '../../hooks/useHandleError';
import { isEmpty } from '../../utils';
import { useAlert } from '../../hooks/useAlert';

export default function SignUp() {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const { handleError } = useHandleError();
  const alert = useAlert();

  const onChangeInput = (event) => {
    // do stuff...
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // const handleSubmit = async () => {
  //   if (!loading) {
  //     setLoading(true);
  //     if (formData.email && formData.firstName && formData.lastName && formData.password) {
  //       try {
  //         await signupStaff(formData);
  //         alert.success('show something');
  //       } catch (error) {
  //         alert.error('something went wrong');
  //       } finally {
  //         setLoading(false);
  //       }
  //     } else {
  //       setLoading(false);
  //       alert.error('missing inputs');
  //     }
  //   }
  // };

  const validateForm = () => {
    const { email, password } = formData;

    if (isEmpty(email)) {
      return false;
    }

    if (isEmpty(password)) {
      return false;
    }

    // check other inputs...

    return true;
  };

  const handleSubmit = async () => {
    if (loading) return;

    setLoading(true);

    try {
      if (!validateForm()) return;

      signupStaff(formData);
      alert.success('show something');
    } catch (error) {
      handleError(error);
      alert.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="first-name"
                label="First Name"
                autoFocus
                onChange={onChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last-name"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={onChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={onChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
