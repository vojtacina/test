import React, { useEffect, useState } from "react";
import Status from '../components/Status'

const Form = () => {

    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [sent, setSent] = useState(false)


    return (

        <div className="w-100 p-2 flex">

            <div className="m-10 flex-1">
                <label name="first" className="w-100 mx-2 text-gray-500">První osoba
            <input name="first" maxLength="4" type="text" onChange={event => setFirst(event.target.value.toUpperCase())} value={first} className="focus:bg-opacity-5 focus:outline-none outline-none tracking-widest mx-2 p-4 w-100 block bg-yellow-900 bg-opacity-10 rounded text-lg text-black duration-150 focus:shadow-lg"></input>
                </label>
                <label name="second" className="w-100 mx-2  text-gray-500">Druhá osoba
            <input name="second" maxLength="4" type="text" onChange={event => setSecond(event.target.value.toUpperCase())} value={second} className="focus:bg-opacity-5 focus:outline-none outline-none tracking-widest mx-2 p-4 w-100 block bg-yellow-900 bg-opacity-10 rounded text-lg text-black duration-150 focus:shadow-lg"></input>
                </label>
            </div>
            <Status first={first} second={second} />
        </div>


    )
}

export default Form