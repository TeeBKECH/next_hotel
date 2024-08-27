import { Inter } from 'next/font/google'

import { Header, Footer } from '@/components/shared'
import Script from 'next/script'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Бутик-отель Хованский - Официальный сайт',
  description: 'Бутик отель Хованский',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <head>
        <Script
          src='https://bookonline24.ru/widget.js'
          strategy='beforeInteractive'
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          id='metrika-counter'
          strategy='afterInteractive'
        >
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();
           for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
           k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
           
           ym(98068357, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
            });`}
        </Script>
        <Script
          id='banner-101hotel'
          strategy='afterInteractive'
        >
          {`(function() {
                    var script   = document.createElement('script'), generated_id = 748;
                    script.type  = 'text/javascript';
                    script.async = true;
                    script.src   = 'https://101hotels.com/widget/generator/' + generated_id + '/668499/t-8/without-hover';
                    var node = document.getElementsByTagName('head')[0];
                    node.appendChild(script);
                }());`}
        </Script>
      </body>
    </html>
  )
}

//
