import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <secetion className="flex pt-10 pb-10 bg-white container mx-auto px-4 lg:px-0">
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-5">
                    <div className="w-full lg:w-1/2">
                       <h2 className="text-black text-5xl lg:text-7xl font-semibold mb-3">Invest with Confidence</h2>
                       <p className="text-black text-lg">
                            We bring you robust financial products for your alternate investments. Explore our bouquet of Unlisted Shares, high-return Fixed Deposits, and Bonds.
                       </p>
                       <div className="flex flex-col lg:flex-row gap-2 mt-4">
                            <Link to="#" className="bg-amber-600 p-3 px-10 text-center text-white rounded-full hover:bg-amber-800 transition duration-500">Get Started</Link>
                            <Link to="#" className="border border-neutral-300 text-center p-3 px-10 rounded-full hover:bg-neutral-100 transition duration-500">Download the app</Link>
                       </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src="src/assets/images/banner.svg" className="w-full h-full object-cover" alt="" />
                    </div>
                </div>
            </secetion>
        </>
    )
}


export default Banner;