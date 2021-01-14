import Head from 'next/head'
import Form from '../components/Form'
import Teaser from '../components/Teaser'
import Header from '../components/Header'

export default function Home() {
    return (
        <div >
            <Head>
                <title>Test kompatibility partnerů</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header activePage="vypocet" />

            <Teaser />

            <div id="main" className="container mx-auto px-6 mt-10">
                <div className="w-full h-64 rounded mb-32">

                    <Form />

                </div>
            </div>
        </div>
    )
}