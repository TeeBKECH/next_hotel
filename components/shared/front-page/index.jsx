import clsx from 'clsx'
import Image from 'next/image'

import styles from './front-page.module.scss'
import Button from '@/components/ui/button'
import Link from 'next/link'
import BookingSearch from '@/components/booking/BookingSearch'
import BookingRooms from '@/components/booking/BookingRooms'
import BookingDates from '@/components/booking/BookingDates'
import Socials from '@/components/socials'

const FrontPage = () => {
  return (
    <>
      <section className={clsx('section', styles.intro)}>
        <div className={styles.intro_bg}>
          <Image
            src='/assets/img/bg/bg.webp'
            alt='bg'
            fill
            sizes='100vw'
          />
          <div className={styles.intro_overlay}></div>
        </div>
        <div className={clsx('container', styles.intro_container)}>
          <div className={styles.intro_card}>
            <div className={styles.intro_front}>
              <div className={styles.intro_stars}>
                <Image
                  src='/assets/img/star.svg'
                  width={15}
                  height={15}
                  alt='star icon'
                />
                <Image
                  src='/assets/img/star.svg'
                  width={20}
                  height={20}
                  alt='star icon'
                />
                <Image
                  src='/assets/img/star.svg'
                  width={25}
                  height={25}
                  alt='star icon'
                />
                <Image
                  src='/assets/img/star.svg'
                  width={20}
                  height={20}
                  alt='star icon'
                />
                <Image
                  src='/assets/img/star.svg'
                  width={15}
                  height={15}
                  alt='star icon'
                />
              </div>
              <h1 className='gradient-text gradient-text-animate'>
                Палаты Хованских <span>by Friendly Inn</span>
              </h1>
              <p>Бутик-отель в центре Москвы</p>
            </div>
            <div className={styles.intro_back}>
              <div className={styles.intro_devider}></div>
              <h3 className='gradient-text'>Бронируйте номера</h3>

              <a
                className='gradient-text'
                target='_blank'
                rel='noindex nofollow'
                href='tel:+79264546898'
              >
                8 (926) 454-68-98
              </a>
              <Socials />
              <div className={clsx(styles.intro_devider, styles.intro_devider_reverse)}></div>
            </div>
          </div>
          <div className={styles.intro_booking}>
            <BookingSearch />
          </div>
        </div>
      </section>
      <section className={clsx('section', styles.about)}>
        <div className={clsx('container', styles.about_container)}>
          <div className={clsx(styles.about_title)}>
            <h2 className='gradient-text gradient-text-animate'>Доступные даты</h2>
            <div className={styles.about_devider}></div>
          </div>
          <div className={clsx(styles.about_content)}>
            <BookingDates />
          </div>
        </div>
      </section>
      <BookingRooms />
      {/* <section
        id='shares'
        className={clsx('section', styles.shares)}
      >
        <div className={clsx('container', styles.shares_container)}>
          <div className={styles.shares_title}>
            <h2 className='gradient-text gradient-text-animate'>Тарифы</h2>
            <div className={styles.shares_devider}></div>
          </div>
          <div className={styles.shares_content}>
            <div className={styles.shares_item}>
              <div className={styles.shares_item_image}>
                <Image
                  src='/assets/img/rooms/standard/1.webp'
                  fill
                  alt='Романтический отдых'
                />
              </div>
              <div className={styles.shares_item_info}>
                <h3 className='gradient-text'>Романтический отдых</h3>
                <p>
                  Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные
                  тексты.
                </p>
                <ul>
                  <li>Проживание в уютном номере выбранной категории;</li>
                  <li>Завтрак для двоих в постель;</li>
                  <li>ранний заезд в 12.00 и поздний выезд в 15.00*</li>
                  <li>комплимент от отеля и бутылка шаманского; </li>
                  <li>охраняемая парковка;</li>
                </ul>
                <a
                  className={styles.more}
                  href={`/?tl-booking-open=true&tl-offer=370679`}
                >
                  <span>Подробнее</span>
                </a>
              </div>
            </div>
            <div className={styles.shares_item}>
              <div className={styles.shares_item_image}>
                <Image
                  src='/assets/img/rooms/standard/2.webp'
                  fill
                  alt='Романтический отдых'
                />
              </div>
              <div className={styles.shares_item_info}>
                <h3 className='gradient-text'>Предложение дня</h3>
                <p>
                  Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные
                  тексты.
                </p>
                <ul>
                  <li>Проживание в уютном номере выбранной категории;</li>
                  <li>Завтрак для двоих в постель;</li>
                  <li>ранний заезд в 12.00 и поздний выезд в 15.00*</li>
                  <li>комплимент от отеля и бутылка шаманского; </li>
                  <li>охраняемая парковка;</li>
                  <li>ранний заезд в 12.00 и поздний выезд в 15.00*</li>
                  <li>комплимент от отеля и бутылка шаманского; </li>
                </ul>
                <a
                  className={styles.more}
                  href={`/?tl-booking-open=true&tl-offer=370679`}
                >
                  <span>Подробнее</span>
                </a>
              </div>
            </div>
            <div className={styles.shares_item}>
              <div className={styles.shares_item_image}>
                <Image
                  src='/assets/img/rooms/standard/3.webp'
                  fill
                  alt='Романтический отдых'
                />
              </div>
              <div className={styles.shares_item_info}>
                <h3 className='gradient-text'>Деловой пакет</h3>
                <p>
                  Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные
                  тексты.
                </p>
                <p>
                  Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные
                  тексты.
                </p>
                <ul>
                  <li>Проживание в уютном номере выбранной категории;</li>
                  <li>Завтрак для двоих в постель;</li>
                  <li>ранний заезд в 12.00 и поздний выезд в 15.00*</li>
                  <li>комплимент от отеля и бутылка шаманского; </li>
                </ul>
                <a
                  className={styles.more}
                  href={`/?tl-booking-open=true&tl-offer=370679`}
                >
                  <span>Подробнее</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}
export default FrontPage
