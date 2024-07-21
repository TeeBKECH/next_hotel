'use client'

import Script from 'next/script'
import styles from './tl-search.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const TLSearch = () => {
  const pathname = usePathname()

  useEffect(() => {
    return () => {
      // console.log('unmount ', window.travelline.integration.__cq)
    }
  }, [pathname])
  return (
    <>
      <div
        id='tl-search-form'
        className={styles.container}
      >
        <a
          href='https://www.travelline.ru/products/tl-hotel/'
          rel='nofollow'
          target='_blank'
        >
          TravelLine
        </a>
      </div>
      <Script
        strategy='afterInteractive'
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `(function (w) {
          const q = [
      ['setContext', 'TL-INT-parradossohotel-new.main', 'ru'],
      [
        'embed',
        'search-form',
        {
          container: 'tl-search-form',
        },
      ],
    ]
    const h = ['ru-ibe.tlintegration.ru', 'ibe.tlintegration.ru', 'ibe.tlintegration.com']
      const t = (w.travelline = w.travelline || {}),
        ti = (t.integration = t.integration || {})
      ti.__cq = ti.__cq ? ti.__cq.concat(q) : q
      console.log(ti)
      if (!ti.__loader) {
        ti.__loader = true
        var d = w.document,
          c = d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]
        function e(s, f) {
          return function () {
            w.TL || (c.removeChild(s), f())
          }
        }
        ;(function l(h) {
          if (0 === h.length) return
          var s = d.createElement('script')
          s.type = 'text/javascript'
          s.id = 'tl-loader-script-id'
          s.async = !0
          s.src = 'https://' + h[0] + '/integration/loader.js'
          s.onerror = s.onload = e(s, function () {
            l(h.slice(1, h.length))
          })
          c.appendChild(s)
        })(h)
      }
    })(window)`,
        }}
      ></Script>
    </>
  )
}
export default TLSearch
