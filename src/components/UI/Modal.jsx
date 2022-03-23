import React from 'react'
import classes from './modal.module.css'
const Modal = props => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>{props.children}</div>
    </div>
  )
}

export default Modal
