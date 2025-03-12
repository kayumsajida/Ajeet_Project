import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-neutral px-4 lg:px-0 pt-15 pb-15">
                <div className="container mx-auto">
                    <div className="flex flex-wrap lg:flex-nowrap gap-5">
                        <div className="w-full mb-3 lg:mb-0 xl:mb-0 lg:w-1/3 xl:w-1/3">  
                            <h2 className="text-white text-2xl mb-7 font-bold">Frontier Asia Capital</h2>
                            <p className="text-neutral-300 font-semibold">
                                What you do with your money today can change how you live tomorrow. That’s the power of investing right. We have built InCred Money to give everyone a chance to do that.
                            </p>
                        </div>
                        <div className="w-full mb-3 lg:mb-0 xl:mb-0 lg:w-1/4 xl:w-1/3">
                           <h2 className="text-sm text-white mb-8 lg:text-lg font-medium">InCred Money</h2>
                           <div className="flex flex-col gap-4">
                            <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">About us</Link>
                            <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Media & Press</Link>
                            <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Career</Link>
                            <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Important Announcement</Link>
                            <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Blogs</Link>
                           </div>
                        </div>
                        <div className="w-full mb-3 lg:mb-0 xl:mb-0 lg:w-1/4 xl:w-1/3">                            
                            <h2 className="text-sm text-white mb-8 lg:text-lg font-medium">Products</h2>
                            <div className="flex flex-col gap-4">
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Unlisted Shares</Link>
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Bonds</Link>
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">FDs</Link>
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Refer</Link>
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">MLDs</Link>
                            </div>
                        </div>
                        <div className="w-full mb-3 lg:mb-0 xl:mb-0 lg:w-1/4 xl:w-1/3">                            
                            <h2 className="text-sm text-white mb-8 lg:text-lg font-medium">Quick Link</h2>
                            <div className="flex flex-col gap-4">
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Calculator</Link>
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Terms & Conditions</Link>
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Privacy Policy</Link>
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Investor Relations</Link>
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Contact Us</Link>
                                <Link to="#" className="text-neutral-300 hover:text-white transition duration-500">Disclaimer</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:flex-row justify-between items-center border-t-1 border-b-1 border-neutral-300/25 mt-10 py-5">
                        <div className="text-neutral-300 mb-3 lg:mb-0">
                            © 2022-2024 InCred Money, All rights reserved. Built with love in India.
                        </div>
                        <div className="flex flex-row gap-2">
                            <Link to="#" className="border border-neutral-300/25 p-2 px-10 rounded-full text-neutral-300 font-medium hover:bg-white transition duration-500 hover:text-black">
                                IOS
                            </Link>
                            <Link to="#" className="border border-neutral-300/25 p-2 px-10 rounded-full text-neutral-300 font-medium hover:bg-white transition duration-500 hover:text-black">
                                Android
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <h2 className="text-white lg:text-lg font-medium">Disclaimer</h2>
                        <p className="text-neutral-300 text-sm">
                            Fixed Deposits are offered by Banks/NBFCs and are regulated by the Reserve Bank of India. Alpha Fintech Private Limited, under the brand name of InCred Money, is acting in the capacity of Sub Agent/Referral Partner for distribution of Fixed Deposits of Banks and NBFCs. The funds transferred by the customer for the Fixed Deposits are directly credited to the regulated entity offering the Fixed Deposit product. Fixed Deposits are offered to Resident Indians above the age of 18 who have a PAN & an Aadhaar. Interest rates are subject to change. *T&C apply.
                        </p>
                        <p className="text-neutral-300 text-sm">
                            The information and data provided on the InCred Money platform concerning unlisted equities are solely for informational purposes and should not be interpreted as a recommendation or solicitation to invest. InCred Money and its representatives are not SEBI-registered research analysts or advisors. Any research, analysis, or information presented on this platform does not constitute investment advice or a recommendation by InCred Money or its affiliates. Investors are strongly encouraged to perform their own thorough research and due diligence before making any investment decisions. Any decision to invest or not to invest shall be at your own discretion. Unlisted equities carry a higher risk profile compared to listed securities, including but not limited to liquidity risk, regulatory risk, and market volatility. Potential investors should be aware of these risks and consider them carefully. It is highly recommended that investors consult with their own financial advisors to understand the suitability of such investments in the context of their personal financial situation, investment objectives, and risk tolerance. Additionally, investors should read and fully understand the detailed risk profile and disclosures attached to the unlisted equities before proceeding with any investment.
                        </p>
                        <p className="text-neutral-300 text-sm">
                            The information mentioned on the platform is based on publicly available data and to the best of our knowledge, does not constitute insider information.
                        </p>
                        <p className="text-neutral-300 text-sm">
                            Pre-IPO shares are unlisted securities, but this should not be interpreted as InCred Money guaranteeing or confirming that an IPO will take place for these shares. The decision to proceed with an IPO is entirely at the discretion of the issuing company, which may choose not to go public.
                        </p>
                        <p className="text-neutral-300 text-sm">
                            Unlisted shares are subject to a lock-in period of six months from the date of listing.
                        </p>
                        <p className="text-neutral-300 text-sm">
                            InCred Money is the brand name of Alpha Fintech Private Limited with its registered office at The Capital, Unit No 1203, 12th floor, B Wing, Plot No. C-70, G Block, Bandra Kurla Complex, Mumbai – 400 051. Unless otherwise mentioned, Alpha Fintech Private Limited will be the counterparty (seller) while making your investment.
                        </p>
                        <p className="text-neutral-300 text-sm">
                            *Corporate Bonds transactions are executed on Biddeasy.com. Biddeasy is Online Bond platform provider and registered with BSE and NSE in the name of Oro Financial Consultants Pvt Ltd.
                        </p>
                        <p className="text-neutral-300 text-sm">
                            Oro Financial Consultants Pvt Ltd is the Stock broker entity operating in cash and debt segment with BSE and Debt segment with NSE having SEBI registration number: INZ000312534, Registered as an Online Bond Platform Provider in BSE Ltd.(Member Code: 6821) and National Stock Exchange of India Limited (Member Code: 90389)
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}


export default Footer;