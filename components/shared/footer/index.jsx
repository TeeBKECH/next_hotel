import clsx from 'clsx'

import Logo from '@/components/ui/logo'
import styles from './footer.module.scss'
import Link from 'next/link'
import Socials from '@/components/socials'

const footer = () => {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.border}></div>
      <div className={clsx('ornament ornament-o1 ornament-fh', styles.ornament)}></div>
      <div className={clsx('container', styles.container)}>
        <div className={styles.logo}>
          <Logo type='dark' />
          <Socials />
        </div>
        <div className={styles.menu}>
          <h3>Меню сайта</h3>
          <ul>
            <li>
              <Link href='/'>Главная</Link>
            </li>
            <li>
              <Link href='/#rooms'>Номера</Link>
            </li>
            <li>
              <Link href='/#shares'>Тарифы</Link>
            </li>
            <li>
              <Link href='/about'>Об отеле</Link>
            </li>
            <li>
              <Link href='/contacts'>Контакты</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contacts_item}>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.9975 16C6.46587 16.0121 -0.00911762 9.4595 9.63742e-06 1.00251C9.63742e-06 0.450225 0.447725 0 1.00001 0H3.63937C4.13494 0 4.55593 0.364129 4.6287 0.854329C4.80311 2.0292 5.14517 3.17297 5.64448 4.2507L5.74725 4.4725C5.89013 4.78091 5.79328 5.14734 5.51668 5.34487C4.6993 5.92859 4.38692 7.10355 5.0237 8.02036C5.82278 9.17084 6.83005 10.1779 7.98027 10.9766C8.89702 11.6132 10.0718 11.3009 10.6555 10.4836C10.8532 10.2069 11.2198 10.11 11.5284 10.2529L11.7492 10.3552C12.827 10.8545 13.9708 11.1966 15.1458 11.371C15.636 11.4437 16 11.8647 16 12.3603V15C16 15.5523 15.5512 16 14.9989 16L14.9975 16Z'
                fill='#423d38'
              />
            </svg>
            <a href='#'>+7 999 999 99 99</a>
          </div>
          <div className={styles.contacts_item}>
            <svg
              id='Layer_1'
              version='1.1'
              viewBox='0 0 128 128'
            >
              <circle
                cx='64'
                cy='64'
                r='64'
                fill='#423d38'
              />
              <path
                className={styles.st1}
                d='M64 72.4l38.2-32.7c-.6-.4-1.4-.7-2.2-.7H28c-.8 0-1.6.3-2.2.7L64 72.4z'
              />
              <path
                className={styles.st1}
                d='M66.6 75.4c-1.5 1.3-3.7 1.3-5.2 0L24 43.5V85c0 2.2 1.8 4 4 4h72c2.2 0 4-1.8 4-4V43.4l-37.4 32z'
              />
            </svg>
            <a href='#'>khovansky@friendlyinn.ru</a>
          </div>
        </div>
        <div className={styles.copy}>&copy; {new Date().getFullYear()}. Все права защищены</div>
      </div>
    </footer>
  )
}
export default footer
