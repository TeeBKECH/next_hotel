import clsx from 'clsx'
import Image from 'next/image'

import TLSearch from '@/components/tl-search'
import styles from './front-page.module.scss'
import Button from '@/components/ui/button'
import Link from 'next/link'
import Rooms from '@/components/rooms'

const FrontPage = () => {
  return (
    <>
      <section className={clsx('section', styles.intro)}>
        <div className={styles.intro_bg}>
          <Image
            src='/assets/img/rooms/family/2.webp'
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
              <p className='gradient-text'>
                Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные
                тексты. Снова лучше взобравшись продолжил буквенных вершину
              </p>
              <p className='gradient-text'>
                Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные
                тексты.
              </p>
              <div className={clsx(styles.intro_devider, styles.intro_devider_reverse)}></div>
            </div>
          </div>
          <div className={styles.intro_booking}>
            <TLSearch />
          </div>
        </div>
      </section>
      <section className={clsx('section', styles.about)}>
        <div className={clsx('container', styles.about_container)}>
          <div className={clsx(styles.about_title)}>
            <h2 className='gradient-text gradient-text-animate'>Об Отеле</h2>
            <div className={styles.about_devider}></div>
          </div>
          <div className={clsx(styles.about_content)}>
            <p>
              Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
              Подпоясал однажды свое даль от всех.
            </p>
            <p>
              Раз образ силуэт бросил свой. Свою пунктуация осталось вопроса рукопись, подпоясал
              текст своих Себя. Раз образ силуэт бросил свой. Свою пунктуация осталось вопроса
              рукопись, подпоясал текст своих агентство? Себя.
            </p>
            <p>
              Текст несколько взгляд путь, наш последний собрал свою сих образ языком по всей
              подзаголовок парадигматическая напоивший.
            </p>
            <p>
              Назад вскоре напоивший безорфографичный рыбными они предупреждал знаках. Переулка одна
              страну рыбными рукописи. Заманивший, образ силуэт бросил свой. Свою пунктуация
              осталось вопроса рукопись, подпоясал текст своих агентство? Себя. Раз образ силуэт
              бросил свой. Свою пунктуация осталось вопроса рукопись, подпоясал текст своих
              агентство? Себя.
            </p>
            <p>
              Запятой снова инициал рыбного залетают коварных деревни над заглавных дал, которое
              великий! Пустился, власти раз!
            </p>
            <Link
              href='/about'
              className={styles.about_more}
            >
              Подробнее &rarr;
            </Link>
          </div>
        </div>
      </section>
      <Rooms />
      <section
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
      </section>
    </>
  )
}
export default FrontPage
