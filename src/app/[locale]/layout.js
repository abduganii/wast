import Footer from '@/components/UI/footer'
import Header from '@/components/UI/header'
import i18nConfig from '../../../i18nConfig'
import { dir } from 'i18next'
import { Inter } from 'next/font/google'
import '../../style/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wasteless || Wibsite',
  description: 'We are recycle to keep our nature',
}
export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default  function  RootLayout({
  children,
  params: { locale }
}) {

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <Header lang={locale} />
        {children}
        <Footer lang={locale} />
      </body>
    </html>
  )
}
