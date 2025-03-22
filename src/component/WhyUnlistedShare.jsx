import { Link } from "react-router-dom";

const WhyUnlistedShare = () => {
    return (
        <>
            <div className="pt-20 pb-20 bg-neutral">
                <div className="container mx-auto">
                    <h2 className="text-white text-4xl font-bold w-full text-center mb-10">Why unlisted shares?</h2>
                    <div className="flex flex-wrap justify-between items-center text-neutral-300 text-center gap-5">
                        <div className="w-full lg:w-1/4">
                            <img src="src/assets/images/first.png" className="w-20 h-20 mx-auto mb-4" alt="Icons" />
                            <h2 className="text-lg font-bold mb-2">Get early access to top companies</h2>
                            <p>
                                Gain exclusive early access before they become widely available, positioning yourself for potential maximum returns in a competitive market
                            </p>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <img src="src/assets/images/first.png" className="w-20 h-20 mx-auto mb-4" alt="Icons" />
                            <h2 className="text-lg font-bold mb-2">Get early access to top companies</h2>
                            <p>
                                Gain exclusive early access before they become widely available, positioning yourself for potential maximum returns in a competitive market
                            </p>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <img src="src/assets/images/first.png" className="w-20 h-20 mx-auto mb-4" alt="Icons" />
                            <h2 className="text-lg font-bold mb-2">Get early access to top companies</h2>
                            <p>
                                Gain exclusive early access before they become widely available, positioning yourself for potential maximum returns in a competitive market
                            </p>
                        </div>
                    </div>
                    <div className="w-full text-center mt-10">
                        <Link to="#" className="btn-secondary">Start Investing</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUnlistedShare;