'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import clsx from 'clsx'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import styles from './swiper.module.scss'

const images = [
  {
    src: '/assets/img/rooms/standard/1.webp',
    caption: 'Описание 1',
  },
  {
    src: '/assets/img/rooms/standard/2.webp',
    caption: 'Описание 2',
  },
  {
    src: '/assets/img/rooms/standard/3.webp',
    caption: 'Описание 3',
  },
  {
    src: '/assets/img/rooms/standard/4.webp',
    caption: 'Описание 4',
  },
]

const MySwiper = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <div className={styles.swiper_box}>
      <button
        ref={navigationPrevRef}
        className={clsx(styles.swiper_btn, styles.swiper_prev)}
      >{`<`}</button>
      <button
        ref={navigationNextRef}
        className={clsx(styles.swiper_btn, styles.swiper_next)}
      >{`>`}</button>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        slidesPerView={1.2}
        spaceBetween={30}
        breakpoints={{
          350: {
            spaceBetween: 10,
          },
          650: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.caption}
                fill
              />
              <span>{image.caption}</span>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default MySwiper
