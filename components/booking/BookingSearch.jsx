'use client'

import styles from './booking.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const BookingSearch = () => {
  const pathname = usePathname()

  const initWidget = (config) => {
    let timeoutId

    let context = window
    if (!context) return

    const tryInitWidget = () => {
      let HotelWidget = context.HotelWidget
      let TIMEOUT_DELAY = 500
      if (HotelWidget) HotelWidget.init(config, 'https://bookonline24.ru/')
      else timeoutId = setTimeout(tryInitWidget, TIMEOUT_DELAY)
    }
    tryInitWidget()

    return function () {
      return clearTimeout(timeoutId)
    }
  }

  useEffect(() => {
    initWidget({
      hotelId: 'b0ed43f8-9b38-4395-9b63-70491c685dcc',
      version: '2',
      baseUrl: 'https://bookonline24.ru/',
      hooks: {
        onError: function (e) {
          console.error('onError', e)
        },
        onInit: function () {
          console.log('onInit')
        },
        onBooking: function (v) {
          console.log('onBooking', v)
        },
      },
    })
    HotelWidget.add({
      type: 'horizontalBlock',
      appearance: {
        container: 'bookingSearch',
      },
    })
  }, [])
  return (
    <>
      <div
        id='bookingSearch'
        className={styles.container}
      ></div>
    </>
  )
}
export default BookingSearch
