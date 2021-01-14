import Link from 'next/link'

const Button = ({ type, value, link, primary }) => {

    /* STYLES */
    const primaryClass = "my-4 p-4 rounded bg-green-900 text-white"
    const basicClass = "my-4 p-4 rounded bg-white text-black"

    if (!link) {
        return (
            <button type={type} className={primary ? primaryClass : basicClass}>{value}</button>
        )
    }
    else {
        return (
            <Link href={link}>
                <button type={type} className={primary ? primaryClass : basicClass}>{value}</button>
            </Link>
        )
        }
}

export default Button