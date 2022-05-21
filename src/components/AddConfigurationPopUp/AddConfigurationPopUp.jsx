import React from 'react';
import './sass/styles.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import addImg from '../../assets/img/512PX/Icono_Cierre_Azul_512px.png';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { addConfigurationNameSuccess, postCreateNewConfiguration } from '../../actions/systemsAction';

export default function AddConfigurationPopUp() {


  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [ formValues, handleInputChange ] = useForm({
    nameConfig: '',
  })


  const { nameConfig } = formValues;


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddNameConfiguration = () => {
    dispatch( addConfigurationNameSuccess(nameConfig));
    handleClose();
  }

  return (
    <div>
      <button className='addButton' onClick={handleClickOpen}>
        <img src={addImg} className="addImg"></img>
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nombre de la nueva configuración</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Nombra tu configuración
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name='nameConfig'
            id="name"
            label=""
            onChange={handleInputChange}
            value={nameConfig}
            placeholder="Agregar nombre"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}  className="buttons">
            Cancelar
          </button>
          <button onClick={handleAddNameConfiguration} className="buttons">
            OK
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
