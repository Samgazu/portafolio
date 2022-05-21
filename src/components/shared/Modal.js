import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

import './Modal.scss';
class CustomModal extends React.Component{

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.state = { };
    }

    handleClose = () => {
      if(this.props.toggle){
        this.props.toggle();
      }
    };

    render() {
        const BuildModal = () => {
          return (
            <div>
              <Modal
                open={this.props.isOpen}
                onClose={this.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
              >
                <div style={this.modalStyle} className={['paper', this.props.bodyWidth == 'small' ? 'smallWidth' : ''].join(' ')}>
                  <div className={'closeModal'}><CloseIcon onClick={this.handleClose} /></div>
                  <h2 className={"simple-modal-title"} style={{marginTop:'0'}} ><img className={this.props.imgModal&&'img-modal-general'} src={this.props.imgModal} alt=""/> {this.props.title}</h2>
                  <p className={"simple-modal-description"}>{this.props.subTitle}</p>
                  <div className={"simple-modal-body"}>
                    {this.props.body}
                  </div>
                </div>
              </Modal>
          </div>
          );
        }
    

        return(
          <BuildModal />
        );
    }
}

CustomModal.propTypes = {
  toggle: PropTypes.any,
  isOpen: PropTypes.any,
  bigModal:PropTypes.any,
  title: PropTypes.any,
  subTitle: PropTypes.any,
  body: PropTypes.any,
  imgModal: PropTypes.any,
};

export default CustomModal;
