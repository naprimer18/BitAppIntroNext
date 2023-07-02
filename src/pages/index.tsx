import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainContent } from '@/components/MainContent'
import Head from 'next/head'
import favicon from  "../../public/favicons/favicon.png"
import Script from 'next/script'

export default function Home() {
  return (<>
      <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
        // @ts-ignore
        keywords="LetsBulls letsbulls, Криптовалюты, Биткоин, Кошелек, Блокчейн, Технологии, Инвестиции, Финансы, Безопасность, Трейдинг, Криптобиржа,
        Cryptocurrencies, Bitcoin, Wallet, Blockchain, Technology, Investments, Finance, Security, Trading, Cryptocurrency exchange
        Digital assets, Portfolio management, Payment processing, Decentralization, Peer-to-peer, Smart contracts, Tokenization, Mining
        Crypto regulation, User experience, Mobile app, Web development, Customer support, KYC/AML compliance, Cryptocurrency news, Cryptocurrency market trends"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={favicon.src}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={favicon.src}
      />
      <title>LetsBulls</title>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z6VPSNKS9T"></Script>
      <Script id="google-analytics">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-Z6VPSNKS9T');
        `}
      </Script>
      <Header />
      <MainContent />
      <Footer />
      </>
  )
}

// export function getServerSideProps(context: { locale: any; }) {
//   return {
//     props: { locale: context.locale },
//   };
// }