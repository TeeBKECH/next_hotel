'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useRef } from 'react'

const tlArr = [
  ['setContext', 'TL-INT-parradossohotel-new.main', 'ru'],
  [
    'embed',
    'search-form',
    {
      container: 'tl-search-form',
    },
  ],
]
// const tlDomainArr = ['ru-ibe.tlintegration.ru', 'ibe.tlintegration.ru', 'ibe.tlintegration.com']

const TLScript = () => {
  const pathname = usePathname()
  const ref = useRef(false)

  useEffect(() => {
    let t = (window.travelline = window.travelline || {}),
      ti = (t.integration = t.integration || {})
    ti.__cq = ti.__cq ? ti.__cq.concat(tlArr) : tlArr
    ti.__loader = true
    // pathname == '/' && ti.__cq.concat(tlArr)
    // if (!ref.current) {
    //   ti.__cq = tlArr
    // } else {
    //   ti.__cq.concat(tlArr)
    // }
    // ref.current = true

    // let parentElement =
    //   window.document.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]

    // let script = window.document.createElement('script')
    // script.type = 'text/javascript'
    // script.id = 'tl-loader-srcipt-id'
    // script.async = !0

    // function e(s, f) {
    //   return function () {
    //     window.TL || (s.remove(), f())
    //   }
    // }

    // const createLoaderScript = (s, h) => {
    //   if (0 === h.length) return
    //   s.src = 'https://' + h[0] + '/integration/loader.js'
    //   s.onerror = s.onload = e(s, function () {
    //     createLoaderScript(s, h.slice(1, h.length))
    //   })
    //   parentElement.appendChild(s)
    // }

    // const deleteLoaderScript = () => {
    //   let scripts = window.document.querySelectorAll('#tl-loader-srcipt-id')
    //   if (scripts.length) {
    //     scripts.forEach((element) => {
    //       element.remove()
    //     })
    //   }
    // }

    // if (!ti.__loader) {
    //   ti.__loader = true
    //   createLoaderScript(script, tlDomainArr)
    // }

    return () => {
      ti.__loader = false
      window.travelline = {}
      console.log(window.travelline)
      // deleteLoaderScript()
    }
  }, [pathname])
  return (
    <Script
      strategy='beforeInteractive'
      id='tl-loader-srcipt-id'
      src='https://ru-ibe.tlintegration.ru/integration/loader.js'
      // onReady={() => {
      //   console.log(123)
      // }}
    />
  )
}
export default TLScript
