import React, { useEffect, useState } from "react";

const Item = ({ title, active }) => {
    return (
        <div className={"m-4 p-4 rounded " + (active ? "bg-gray-100 text-black font-bold" : "bg-white hover:bg-gray-100 text-gray-800 ")} >
            {title}
        </div>
    )
}

const Header = () => {

    const [opened, setOpened] = useState(false)

    return (
        <div>
            <div className="hidden md:flex justify-start bg-white px-6 md:px-24 py-6">
                <Item title="🔮  Test dle typu osobnosti" active={true} />
                <Item title="💎  Test dle hodnotového žebříčku" active={false} />
            </div>
            {!opened ? <div className="block md:hidden justify-start bg-white px-6 md:px-24 py-6">
                <a className="cursor-pointer" onClick={() => setOpened(!opened)}><Item title="⬇ Otevřít menu" active={false} /></a>
            </div> : <div className="block md:hidden justify-start bg-white px-6 md:px-24 py-6">
                    <a className="cursor-pointer"  onClick={() => setOpened(!opened)}><Item title="⬆ Zavřít menu" active={false} /></a>
                    <Item title="🔮  Test dle typu osobnosti" active={true} />
                    <Item title="💎  Test dle hodnotového žebříčku" active={false} />
                </div>}

        </div>
    )
}

export default Header