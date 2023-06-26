import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
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
  const data = {
    userName: dataRow.username, 
    email: dataRow.email, 
    name: dataRow.name, 
    city: dataRow.address.city, 
    zipcode: dataRow.address.zipcode
  }
  
  const [open, setOpen] = React.useState(false);
  // const [disab, setDisab] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [formData, setFormData] = React.useState(data);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpenAlert(false);
  }
  const onChangeInput = (event) => {
    setFormData((prev) => ({...prev, [event.target.name] : event.target.value}));
    console.log(formData);
  }
  
  const validateForm = () => {
    const { userName, email, name, city, zipcode } = formData;
    if(isEmpty(userName) || isEmpty(email) || isEmpty(name) || isEmpty(city) || isEmpty(zipcode) ) {
      alert('Dữ liệu đang trống')
      return false;
    }
    console.log("true");
    setOpenAlert(true);
    return true
  }
  const handleSubmit = async () => {
    if(!validateForm()) {
      return false;
    }
    dataRow.username = formData.userName;
    dataRow.name = formData.name;
    dataRow.email = formData.email;
    dataRow.address.city = formData.city;
    dataRow.address.zipcode = formData.zipcode;
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
          <Box sx={{ width: '100%' }}>
            <Collapse in={openAlert}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenAlert(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Update susscess
              </Alert>
            </Collapse>
          </Box>
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
                defaultValue={dataRow.username}
                autoFocus
                placeholder="Please enter username"
                onChange={onChangeInput}
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
                defaultValue={dataRow.email}
                autoComplete="email"
                onChange={onChangeInput}
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
                defaultValue={dataRow.name}
                autoComplete="name"
                onChange={onChangeInput}
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
                defaultValue={dataRow.address.city}
                id="city"
                autoComplete="new-city"
                onChange={onChangeInput}
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
                defaultValue={dataRow.address.zipcode}
                id="zipcode"
                autoComplete="new-zipcode"
                onChange={onChangeInput}
              />
            </Grid>
          </Grid>
          <Button 
            type="submit" 
            variant="contained" 
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