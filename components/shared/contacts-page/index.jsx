import clsx from 'clsx'
import styles from './contacts-page.module.scss'
import Socials from '@/components/socials'
import Script from 'next/script'

const ContactsPage = () => {
  return (
    <>
      <section className={clsx('section', styles.contacts)}>
        <div className={clsx('container', styles.container)}>
          <div className={styles.info}>
            <div className={styles.content}>
              <div className={styles.title}>
                <h1>Контакты</h1>
              </div>
              <div className={styles.content_item}>
                <h3>Адрес:</h3>
                <p>Москва, Старопименовский пер.11 стр.2</p>
              </div>
              <div className={styles.content_item}>
                <h3>Социальные сети:</h3>
                <Socials />
              </div>
              <div className={styles.content_item}>
                <h3>Телефон:</h3>
                <a
                  target='_blank'
                  rel='noindex nofollow'
                  href='tel:+79264546898'
                >
                  8 (926) 454-68-98
                </a>
              </div>
              <div className={styles.content_item}>
                <h3>Почта:</h3>
                <a
                  target='_blank'
                  rel='noindex nofollow'
                  href='mailto:khovanskyhotel@gmail.com'
                >
                  khovanskyhotel@gmail.com
                </a>
              </div>
            </div>
            <div className={styles.form}>
              <Script
                dangerouslySetInnerHTML={{
                  __html: `(function (w, d, u) {
                      var s = d.createElement('script')
                      s.async = true
                      s.src = u + '?' + ((Date.now() / 180000) | 0)
                      var h = d.getElementsByTagName('script')[0]
                      h.parentNode.insertBefore(s, h)
                    })(window, document, 'https://cdn-ru.bitrix24.ru/b29346204/crm/form/loader_20.js');`,
                }}
              />
              <script
                data-b24-form='inline/20/su7d9z'
                data-skip-moving='true'
              />
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A3cac6b81433c74efad60c5472763be7f90b7fdf9b21411b0cbf9d96cbeb4757a&amp;source=constructor'
              frameBorder='0'
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
export default ContactsPage
