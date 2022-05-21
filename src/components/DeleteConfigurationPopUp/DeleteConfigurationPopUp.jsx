import React from 'react';
import './sass/styles.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import deleteImg from '../../assets/img/512PX/Icono_Cierre_Azul_512px.png';

export default function DeleteConfigurationPopUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className='deleteButton' onClick={handleClickOpen}>
        <img src={deleteImg} className="deleteImg"></img>
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Eliminar configuración</DialogTitle>
        <DialogContent>
          <DialogContentText>
          ¿Está seguro de borrar esta configuración?
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}  className="buttons">
            Cancelar
          </button>
          <button onClick={handleClose} className="buttons">
            Borrar
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
