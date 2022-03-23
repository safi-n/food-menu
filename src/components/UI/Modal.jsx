import React, {Fragment} from 'react'
import ReactDOM  from 'react';
import classes from './modal.module.css'

const Backdrop = props => {
  return <div className={classes.backdrop}></div>;
}
const ModalOverlay = props => {
  return <div className={classes.modal}>{props.children}</div>;
}

const Modal = props => {
  const portalElement = document.getElementById('overlay')
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal
