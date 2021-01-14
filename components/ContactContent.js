import React, { useEffect, useState } from "react";
import Link from "next/link";
import FileUploader from '../components/FileUploader'


const onChangeHandler = () => {

    console.log(this.target.files[0])

}


const ContactContent = () => {

    const [name, setName] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)



    return (
        <div>
            <div className="w-100 block md:flex content-center">

                <div className="m-0 sm:m-2 md:m-10 flex-1 ">
                    <FileUploader />

                </div>
                <div className="flex-1 bg-white shadow-lg border-red-400 border-1 p-6 my-5 rounded block">
                    <h2 className="text-2xl mb-2">Kontakt</h2>
                </div>

            </div>
            <div className="h-20"></div>

        </div>
    )
}

export default ContactContent