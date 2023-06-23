import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { isEmpty } from '../../utils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  minWidth: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const {dataRow, onChangeRow, rowId} = props;
  
  const [open, setOpen] = React.useState(false);
  const [disab, setDisab] = React.useState(false);
  const [username, setUsername] = React.useState(dataRow.username);
  const [email, setEmail] = React.useState(dataRow.email);
  const [name, setName] = React.useState(dataRow.name);
  const [city, setCity] = React.useState(dataRow.address.city);
  const [zipcode, setZipcode] = React.useState(dataRow.address.zipcode);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onChangeUsername = (event) => {
    setDisab(event.target.value === "");
    setUsername(event.target.value);
  }
  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangeName = (event) => setName(event.target.value);
  const onChangeCity = (event) => setCity(event.target.value);
  const onChangeZipcode = (event) => setZipcode(event.target.value);
  const validateForm = () => {
    if(isEmpty(username)) {
      return false;
    }
    return true
  }
  const handleSubmit = async () => {
    if(!validateForm()) {
      return false;
    }
    dataRow.username = username;
    dataRow.name = name;
    dataRow.email = email;
    dataRow.address.city = city;
    dataRow.address.zipcode = zipcode;
    onChangeRow(rowId, dataRow);
    return true;
  };

  return (
    <div>
      <EditIcon onClick={handleOpen} sx={{cursor: "pointer"}} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
            Edit Profile
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <InputLabel shrink htmlFor="bootstrap-input">
              User Name
            </InputLabel>
              <TextField
                autoComplete="given-name"
                name="userName"
                required
                fullWidth
                id="user-name"
                value={username}
                autoFocus
                placeholder="Please enter username"
                onChange={onChangeUsername}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Email
              </InputLabel>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                value={email}
                autoComplete="email"
                onChange={onChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel shrink htmlFor="bootstrap-input">
                First Name
              </InputLabel>
              <TextField
                required
                fullWidth
                id="name"
                name="name"
                value={name}
                autoComplete="name"
                onChange={onChangeName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel shrink htmlFor="bootstrap-input">
                City
              </InputLabel>
              <TextField
                required
                fullWidth
                name="city"
                value={city}
                id="city"
                autoComplete="new-city"
                onChange={onChangeCity}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel shrink htmlFor="bootstrap-input">
                ZipCode
              </InputLabel>
              <TextField
                required
                fullWidth
                name="zipcode"
                value={zipcode}
                id="zipcode"
                autoComplete="new-zipcode"
                onChange={onChangeZipcode}
              />
            </Grid>
          </Grid>
          <Button 
            type="submit" 
            variant="contained" 
            disabled={disab}
            onClick={() => handleSubmit()} 
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}