import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './logo.module.scss'

const Logo = ({ type }) => {
  return (
    <Link
      className={clsx(styles.logo)}
      href='/'
    >
      <Image
        alt='Палаты Хованских Логотип'
        src={type ? '/assets/img/logo-dark.svg' : '/assets/img/logo.svg'}
        width={200}
        height={60}
      />
    </Link>
  )
}
export default Logo
