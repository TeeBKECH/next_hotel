'use client'

import clsx from 'clsx'
import styles from './booking.module.scss'
import { useEffect } from 'react'

const BookingRooms = () => {
  useEffect(() => {
    HotelWidget.add({
      type: 'roomsList',
      appearance: {
        container: 'bookingRooms',
      },
    })
  }, [])
  return (
    <section
      id='rooms'
      className={clsx(styles.rooms)}
    >
      <div
        id='bookingRooms'
        className={styles.container}
      ></div>
    </section>
  )
}
export default BookingRooms
