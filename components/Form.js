import React, { useEffect, useState } from "react";
import Link from "next/link";
import Status from '../components/Status'

const Form = () => {

    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [sent, setSent] = useState(false)


    return (

        <div className="w-100 p-2 flex">

            <div className="m-10 flex-1">
                <label name="first" className="w-100 mx-4 text-gray-900 text-opacity-50">♂︎ Partner
                    <input name="first" maxLength="4" type="text" onChange={event => setFirst(event.target.value.toUpperCase())} value={first} className="focus:bg-opacity-5 focus:outline-none outline-none tracking-widest mx-2 p-4 w-100 block bg-yellow-900 bg-opacity-10 rounded text-lg text-black duration-150 focus:shadow-lg"></input>
                </label>
                <label name="second" className="w-100 mx-0 text-gray-900 text-opacity-50">♀︎ Partnerka
                    <input name="second" maxLength="4" type="text" onChange={event => setSecond(event.target.value.toUpperCase())} value={second} className="focus:bg-opacity-5 focus:outline-none outline-none tracking-widest mx-2 p-4 w-100 block bg-yellow-900 bg-opacity-10 rounded text-lg text-black duration-150 focus:shadow-lg"></input>
                </label>
                <div className="px-2 mt-8 text-gray-900 text-opacity-50">Pokud neznáš svůj typ osobnosti</div>
                <Link href="https://www.16personalities.com/cs"><a className="px-2 text-green-700 font-bold" target="_blank"> ☞ <span className="underline">Udělej si test</span></a></Link>
            </div>
            <Status first={first} second={second} />
        </div>


    )
}

export default Form