import { ArrowRight, Heading } from "lucide-react";
import { Link } from "react-router-dom";
import CSKImage from "../assets/images/CSK.webp";
import OYPimage from "../assets/images/OYO.webp";
import paragimage from "../assets/images/parag_parikh.webp";
import SBIimage from "../assets/images/SBI_fund.webp";
import ORBISimage from "../assets/images/ORBIS.webp";
import AppolloSimage from "../assets/images/Apollo.webp";
import SEDSimage from "../assets/images/SED.webp";
import NCDEXimage from "../assets/images/NCDEX.webp";
import FAQ from "./FAQ";
import Blog from "./Blog";
import StartInvest from "./StartInvest";
import WhyUnlistedShare from "./WhyUnlistedShare";
import JourneyWealthCreation from "./JourneyWealthCreation";
const listedShare = [
    { imgsrc: CSKImage, Heading: "Chennai Super Kings Cricket Ltd (CSK)", price: "₹192", minshare: "1 Share min", highlighted: "Trending", },
    { imgsrc: OYPimage, Heading: "Oravel Stays Ltd (Oyo Rooms)", price: "₹56", minshare: "300 Share min", highlighted: "Selling Fast", },
    { imgsrc: paragimage, Heading: "Parag Parikh Financial Advisory Services Ltd (PPFAS)", price: "₹8050", minshare: "1 Share min", highlighted: "", },
    { imgsrc: SBIimage, Heading: "SBI Funds Management Ltd (SBI AMC)", price: "₹56", minshare: "300 Share min", highlighted: "Selling Fast", },
    { imgsrc: ORBISimage, Heading: "Orbis Financial Corporation Ltd", price: "₹450", minshare: "1 Share min", highlighted: "", },
    { imgsrc: AppolloSimage, Heading: "Apollo Green Energy Ltd", price: "₹220", minshare: "1 Share min", highlighted: "", },
    { imgsrc: SEDSimage, Heading: "Spray Engineering Devices Limited", price: "₹510", minshare: "1 Share min", highlighted: "", },
    { imgsrc: NCDEXimage, Heading: "NCDEX Ltd", price: "₹510", minshare: "1 Share min", highlighted: "", },
]
const UnlistedShare = () => {
    return (
        <>
            <div className="pt-20 pb-20">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-6xl font-bold mb-4 text-neutral">
                            Grow your wealth with Pre-IPO & Unlisted Shares
                        </h1>
                        <p className="text-2xl mb-2">
                            Grab your chance to invest in India’s top companies.
                        </p>
                        <p className="text-2xl font-bold text-neutral">
                            Get started with just 1 share.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                        {listedShare.map((listed, index) => (
                            <div key={index} className="flex gap-5 justify-between items-center border border-neutral-300 p-4 rounded-2xl">
                                <div className="flex items-center h-12 w-12 lg:h-20 lg:w-20 border border-neutral-300 rounded-lg">
                                    <img src={listed.imgsrc} className="rounded-lg object-cover" alt="Listed Company" />
                                </div>
                                <div className="flex-1 items-center">
                                    <h2 className="text-lg text-neutral font-medium">{listed.Heading}</h2>
                                    <span className="text-lg">{listed.price}</span>
                                    <span className="text-sm text-gray-400 ms-2">*</span>
                                    <span className="text-gray-400 font-normal text-sm ms-2">{listed.minshare}</span>
                                    <div className={listed?.highlighted ? "mt-1 block bg-green-50 text-green-400 p-1 rounded-b-md rounded-t-md max-w-22 text-sm text-center" : "hidden"}>
                                        {listed.highlighted}
                                    </div>
                                </div>
                                <div className="flex">
                                    <Link to="#" className="flex items-center justify-center w-10 h-10 bg-primary hover:bg-primaryhover text-white rounded-full transition-all duration-500"><ArrowRight /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row w-full justify-between mt-10">
                        <Link to="#" className="btn-secondary mx-auto">View All Unlisted Shares</Link>
                    </div>
                </div>
            </div>
            <WhyUnlistedShare />
            <JourneyWealthCreation title="Your success is our priority" />
            <Blog />
            <FAQ />
            <StartInvest />
        </>
    )
}
export default UnlistedShare;