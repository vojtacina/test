import React, { useEffect, useState } from "react";
import Link from 'next/link'


const Item = ({ link, title, active }) => {
    return (
        <Link href={"" + link}><div className={"m-4 p-4 cursor-pointer rounded " + (active ? "bg-gray-100 text-black font-medium" : "bg-white hover:bg-gray-100 text-gray-800 ")} >
            {title}
        </div></Link>
    )
}

const Header = ({ activePage }) => {

    const [opened, setOpened] = useState(false)

    return (
        <div>
            <div className="hidden md:flex justify-start bg-white  px-2 sm:px-6 md:px-24 py-6">
                <Item link="/vypocet" title="✏️  Test dle typu osobnosti" active={activePage === "vypocet" ? true : false} />
                <Item link="/kontakt" title="✉️  Kontakt" active={activePage === "kontakt" ? true : false} />
            </div>
            {!opened ? <div className="block md:hidden justify-start bg-white px-2 sm:px-6 md:px-24 py-6">
                <a className="cursor-pointer" onClick={() => setOpened(!opened)}><Item title="⬇ Otevřít menu" active={false} link="" /></a>
            </div> : <div className="block md:hidden justify-start bg-white px-2 sm:px-6 md:px-24 py-6">
                    <a className="cursor-pointer" onClick={() => setOpened(!opened)}><Item title="⬆ Zavřít menu" active={false} link="" /></a>
                    <Item link="/vypocet" title="✏️  Test dle typu osobnosti" active={activePage === "vypocet" ? true : false} />
                    <Item link="/kontakt" title="✉️  Kontakt" active={activePage === "kontakt" ? true : false} />
                </div>}

        </div>
    )
}

export default Header