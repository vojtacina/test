import Head from 'next/head'
import Form from '../components/Form'
import Teaser from '../components/Teaser'

export default function Home() {
    return (
        <div>

            <Teaser />

            <div id="main" className="container mx-auto px-6 mt-10">
                <div className="w-full h-64 rounded mb-32">

                    <Form />
                    
                </div>
            </div>
        </div>
    )
}