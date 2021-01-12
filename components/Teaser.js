import { Link } from 'react-scroll'


const Teaser = () => {
    return (
        <div className=" bg-white pb-16">
                <div className="pb-6 pt-24 container mx-auto px-24">
                    <h2 className="text-6xl font-bold font-serif text-primary bg-clip-text text-transparent bg-gradient-to-r from-black to-green-500 mb-4">Test kompatibility partnerů</h2>
                    <p className="mt-6">Vyzkoušejte si tento nástroj. Vyhodnocení ihned. 😊</p>
                    <Link to="main" spy={true} smooth={true}><button className="bg-gradient-to-r from-green-900 to-green-600 text-white rounded px-4 py-2 mt-4 my-2 hover:shadow hover:from-green-900 hover:to-green-500 duration-150">Spočítat</button></Link>

                    {/*  <img src={blok.image.filename} alt={blok.image.alt} className="w-full rounded-lg" /> */}
                </div>
            </div>
    ) }

export default Teaser