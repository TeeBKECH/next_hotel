'use client'

import clsx from 'clsx'
import styles from './button.module.scss'

const Button = ({
  text,
  className,
  onClick = () => console.log('clicked'),
  children,
  tl,
  room,
}) => {
  const tlAttr = {
    'data-tl-booking-open': tl,
    'data-tl-room': room,
  }
  return (
    <button
      {...tlAttr}
      onClick={onClick}
      className={clsx(styles.button, className)}
    >
      <span>{text ? text : children}</span>
    </button>
  )
}
export default Button
