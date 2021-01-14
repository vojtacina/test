const Alert = ({ type, value, closable }) => {

    let primaryClass = ""

    if (type === "success") {
        return (
            <div className= "flex-auto my-4 p-4 rounded bg-green-100 text-green-900 shadow-sm">{value}</div>
        )
    }
    else if (type === "warn") {
        primaryClass = "flex-auto  shadow-sm my-4 p-4 rounded bg-yellow-100 text-yellow-900 border-yellow-300"
    }
    else if (type === "error") {
        primaryClass = "flex-auto  shadow-sm my-4 p-4 rounded bg-red-100 text-red-900 border-red-300"
    }

    return (
        <div className={primaryClass}>{value}</div>
    )
}

export default Alert