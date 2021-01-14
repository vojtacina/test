import Head from 'next/head'
import ContactContent from '../components/ContactContent'
import Header from '../components/Header'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Kontakt | Test kompatibility partnerů</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header activePage="kontakt" />

            

            <div id="main" className="container mx-auto px-6 mt-10">
                <div className="w-full h-64 mb-32">

                    <ContactContent />

                </div>
            </div>
        </div>
    )
}