import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'

const Button = ({
  className,
  disabled,
  onClick,
  children
}) => {
  return (
    <button className={cl(className, styles.button)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button