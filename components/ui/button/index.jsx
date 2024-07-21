import clsx from 'clsx'
import styles from './button.module.scss'

const Button = ({ text, className, onClick, children, tl, room }) => {
  return (
    <button
      data-tl-booking-open={`${tl}`}
      data-tl-room={room}
      onClick={onClick}
      className={clsx(styles.button, className)}
    >
      <span>{text ? text : children}</span>
    </button>
  )
}
export default Button
