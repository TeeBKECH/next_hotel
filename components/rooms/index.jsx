import clsx from 'clsx'
import Image from 'next/image'
import Button from '../ui/button'
import styles from './rooms.module.scss'
import Link from 'next/link'

const rooms = [
  {
    name: 'Семейный',
    img: '/assets/img/rooms/family/2.webp',
    tl: '125079',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных. Далеко-далеко за словесными горами.',
    area: 26,
    ppl: 2,
    services: [
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
    ],
  },
  {
    name: 'Стандарт',
    img: '/assets/img/rooms/standard/2.webp',
    tl: '125079',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных. Далеко-далеко за.',
    area: 24,
    ppl: 1,
    services: [
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
    ],
  },
  {
    name: 'Делюкс',
    img: '/assets/img/rooms/delux/1.webp',
    tl: '125079',
    description: 'Далеко-далеко за словесными горами в стране гласных и согласных.',
    area: 30,
    ppl: 3,
    services: [
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
    ],
  },
  {
    name: 'Семейный',
    img: '/assets/img/rooms/family/2.webp',
    tl: '125079',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных. Далеко-далеко за словесными горами.',
    area: 26,
    ppl: 2,
    services: [
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
    ],
  },
  {
    name: 'Стандарт',
    img: '/assets/img/rooms/standard/2.webp',
    tl: '125079',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных. Далеко-далеко за.',
    area: 24,
    ppl: 1,
    services: [
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
    ],
  },
  {
    name: 'Делюкс',
    img: '/assets/img/rooms/delux/1.webp',
    tl: '125079',
    description: 'Далеко-далеко за словесными горами в стране гласных и согласных.',
    area: 30,
    ppl: 3,
    services: [
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
      {
        icon: 'wifi',
        title: 'Wi-Fi',
      },
      {
        icon: 'tv',
        title: 'TV',
      },
    ],
  },
]

const Rooms = () => {
  return (
    <section
      id='rooms'
      className={clsx(styles.rooms)}
    >
      {rooms.map((room, index) => {
        return (
          <div
            key={index}
            className={clsx(styles.rooms_item)}
          >
            <div className={clsx(styles.item_image)}>
              <Image
                src={room.img}
                alt={room.name + ' Номер'}
                fill
              />
              <div className={styles.item_services}>
                {room.services.map((service, i) => {
                  return (
                    <div
                      key={i}
                      className={styles.item_service}
                    >
                      <Image
                        src={`/assets/img/${service.icon}.svg`}
                        height={0}
                        width={0}
                        style={{ width: '20px', height: 'auto' }}
                        alt={`${service.title} icon`}
                      />
                      <span>{service.title}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={clsx(styles.item_content)}>
              <div className={clsx(styles.item_title)}>
                <h3>{room.name}</h3>
              </div>
              <div className={styles.item_info}>
                <div className={styles.item_info_block}>
                  <Image
                    src='/assets/img/ppl.svg'
                    width={23}
                    height={16}
                    alt='Кол-во Гостей'
                  />
                  <span>{room.ppl}</span>
                  <span>Человек</span>
                </div>
                <div className={styles.item_info_block}>
                  <Image
                    src='/assets/img/area.svg'
                    width={23}
                    height={16}
                    alt='Площадь'
                  />
                  <span>{room.area}</span>
                  <span>
                    м<sup>2</sup>
                  </span>
                </div>
              </div>
              <div className={styles.item_devider}></div>
              <div className={styles.item_description}>
                <p>{room.description}</p>
              </div>
              <div className={styles.item_actions}>
                {/* <Button
                  tl={true}
                  room={room.tl}
                >
                  Смотреть цены
                </Button> */}
                <a
                  className={styles.more}
                  href={`/?tl-booking-open=true&tl-room=${room.tl}`}
                >
                  <span>Смотреть цены</span>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
export default Rooms
