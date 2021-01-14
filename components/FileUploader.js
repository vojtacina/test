import axios, { post } from 'axios';
import React, { useEffect, useState } from "react";
import Button from '../components/Button'
import Alert from '../components/Alert'

class FileUploader extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            file: null,
            name: null,
            mail: null,
            text: null,
            alertValue: null,
            alertType: null,
        }

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeMail = this.onChangeMail.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e) {

        e.preventDefault() // Stop form submit

        this.fileUpload(this.state).then((response) => {
            console.log(response.data);

            if (response.data.err) {
                this.setState({ alertValue: "🤕 Zpráva nebyla doručena"})
                this.setState({ alertType: "error"})
            }
            else {
                document.getElementById("name").value = ""
                document.getElementById("email").value = ""
                document.getElementById("file").value = ""
                document.getElementById("text").value = ""
                this.setState({ alertValue: "✅ Zpráva byla v pořádku doručena"})
                this.setState({ alertType: "success"})
                console.log(this.state)
            }

        })
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeMail(e) {
        this.setState({ mail: e.target.value })
    }
    onChangeText(e) {
        this.setState({ text: e.target.value })
    }
    fileUpload(content) {
        const url = '/api/upload';
        const formData = new FormData();
        formData.append('file', content.file)
        formData.append('name', content.name)
        formData.append('mail', content.name)
        formData.append('text', content.name)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }

    render() {

        const StyleLabel = "w-100 mx-4 text-gray-900 text-opacity-50"
        const StyleInput = " mb-2 block focus:bg-opacity-5 focus:outline-none outline-none  p-4 w-full block bg-yellow-900 bg-opacity-10 rounded text-lg text-black duration-150 focus:shadow-lg"
        

        return (
            <form onSubmit={this.onFormSubmit}>
                <h1 className="text-2xl mb-8">Kontaktní formulář</h1>
                <label className="w-full mx-2 text-gray-900 text-opacity-50">Jméno a příjmení<input required id="name" className={StyleInput} type="text" name="name" onChange={this.onChangeName} /></label>
                <label className="w-full text-gray-900 text-opacity-50">Email<input required id="email" className={StyleInput} type="email" onChange={this.onChangeName} /></label>
                <label className="w-full mx-2 text-gray-900 text-opacity-50">Text<textarea required id="text" className={StyleInput} type="text" onChange={this.onChangeName} /></label>
                <label className="w-full text-gray-900 text-opacity-50">Příloha<input id="file" className={StyleInput} type="file" onChange={this.onChange} /></label>
                <div className="flex">
                    <Button type="submit"  value="Odeslat" primary={true} />
                    <div className="w-2"></div>
                    <Alert value={this.state.alertValue} type={this.state.alertType}  />
                </div>
            </form>
        )
    }
}



export default FileUploader