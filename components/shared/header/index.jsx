'use client'
import { useCallback, useEffect, useState } from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Logo from '@/components/ui/logo'
import Button from '@/components/ui/button'

import styles from './header.module.scss'
import Image from 'next/image'

const menuLinks = [
  {
    href: '/',
    title: 'Главная',
  },
  {
    href: '/#rooms',
    title: 'Номера',
  },
  // {
  //   href: '/#shares',
  //   title: 'Тарифы',
  // },
  // {
  //   href: '/about',
  //   title: 'Об Отеле',
  // },
  {
    href: '/contacts',
    title: 'Контакты',
  },
]

const header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()

  const mobileMenuToggler = (toggle) => {
    setShowMenu(!toggle)
  }

  const scrollHandler = useCallback((e) => {
    if (window.scrollY > 70) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={clsx('ornament', scrolled && 'ornament-o1 ornament-fh')}></div>
      <div className={clsx('container', styles.container)}>
        <Logo
          className={styles.logo}
          type={scrolled && 'dark'}
        />
        <div className={styles.address}>
          <Image
            src='/assets/img/markup.svg'
            width={10}
            height={16}
            alt='Адрес отеля'
          />
          <a
            href='https://yandex.ru/maps/org/khovanskiy/20907662265/'
            target='_blank'
            rel='nofollow noindex'
          >
            Москва, Старопименовский пер.11 стр.2
          </a>
        </div>
        <div className={clsx(styles.menu, showMenu && styles.menu_active)}>
          <nav className={styles.nav}>
            {menuLinks.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => mobileMenuToggler(true)}
                  className={clsx(
                    styles.link,
                    pathname == link.href ? `${styles.link_active}` : '',
                  )}
                >
                  {link.title}
                </Link>
              )
            })}
          </nav>
          {/* <div className={styles.booking}>
            <Button>Забронировать</Button>
          </div> */}
        </div>
        <div
          className={styles.burger}
          onClick={() => mobileMenuToggler(showMenu)}
        >
          <span className={styles.burger_item}></span>
          <span className={styles.burger_item}></span>
          <span className={styles.burger_item}></span>
        </div>
      </div>
      <div className={styles.border}></div>
    </header>
  )
}
export default header
