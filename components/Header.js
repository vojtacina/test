const Item = ({title, active}) => {
    return (
        <div className={"m-4 p-4 rounded "+ (active ? "bg-gray-100 text-black font-bold" : "bg-white hover:bg-gray-100 text-gray-800 ")} > 
                {title}
            </div>
    ) }

const Header = () => {
    return (
        <div className="justify-start bg-white px-24 py-6 flex flex-center ">
                <Item title="🔮  Test dle typu osobnosti" active={true} />
                <Item title="dfgdfg" active={false} />
            </div>
    ) }

export default Header