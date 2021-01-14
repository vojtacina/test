import { Link } from 'react-scroll'


const Teaser = () => {
    return (
        <div className=" bg-white pb-16">
                <div className="pb-6 pt-12 container mx-auto px-6 md:px-24">
                    <h2 className=" text-4xl md:text-6xl font-bold font-serif text-primary bg-clip-text text-transparent bg-gradient-to-r from-black to-green-500 mb-4">Test kompatibility partnerů</h2>
                    <p className="mt-6">Vyzkoušejte si tento nástroj zcela zdarma. Vyhodnocení ihned. 😊</p>
                    <Link to="main" spy={true} smooth={true}><button className={"my-4 p-4 rounded bg-green-900 text-white"}>Spočítat</button></Link>

                    {/*  <img src={blok.image.filename} alt={blok.image.alt} className="w-full rounded-lg" /> */}
                </div>
            </div>
    ) }

export default Teaser