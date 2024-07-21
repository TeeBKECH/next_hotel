'use client'

import Script from 'next/script'
import styles from './tl-search.module.scss'

const TLSearch = () => {
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
      {/* <Script
        id='tl-script'
        src='https://ibe.tlintegration.com/integration/loader.js'
        // strategy='beforeInteractive'

        // dangerouslySetInnerHTML={{
        //   __html: ``,
        // }}
      /> */}
    </>
  )
}
export default TLSearch
