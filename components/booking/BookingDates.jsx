'use client'

import clsx from 'clsx'
import styles from './booking.module.scss'
import { useEffect } from 'react'

const BookingRooms = () => {
  useEffect(() => {
    HotelWidget.add({
      type: 'horizontalAvailabilityCalendar',
      appearance: {
        container: 'bookingDates',
      },
    })
  }, [])
  return (
    <section
      id='dates'
      className={clsx(styles.dates)}
    >
      <div
        id='bookingDates'
        className={styles.container}
      ></div>
    </section>
  )
}
export default BookingRooms
