const ShareListed = () => {
    return (
        <>
            <section className="flex flex-wrap container mx-auto pb-10">
                <div className="flex flex-wrap items-center justify-between w-full bg-neutral-100 rounded-t-2xl px-4 pt-20 pb-20 lg:p-20 bg-[url('src/assets/images/UEHeroPattern.webp')] bg-cover bg-no-repeat">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl lg:text-4xl font-medium mb-5">Unlisted Shares</h2>
                        <div className="flex items-center pb-3 leading-8 text-lg text-black font-medium">
                            <span className="mr-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#0F1016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </span>
                            Start investing with just 1 share
                        </div>
                        <div className="flex items-center pb-3 leading-8 text-lg text-black font-medium">
                            <span className="mr-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#0F1016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </span>
                            No commissions, complete transparency
                        </div>
                        <div className="flex items-center pb-3 leading-8 text-lg text-black font-medium">
                            <span className="mr-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="#0F1016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </span>
                            No commissions, complete transparency
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/two.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                            <div className="shadow shadow-neutral-200 rounded-2xl p-2 bg-white text-center">
                                <img src="src/assets/images/one.webp" className="h-30 mx-auto" alt="" />
                                <span className="text-sm text-[10px]">NSE</span>
                            </div>
                        </div>
                    </div>                                     
                </div>
                <div className="w-full flex flex-wrap items-center justify-between p-10 rounded-b-2xl bg-gradient-to-tr from-gradientprimary to-gradientsecondary">
                    <div className="text-2xl font-medium mb-3 text-white">
                        Trusted by over 1,50,000 users
                    </div>
                    <a href="#" className="dark-btn w-full text-center lg:w-72 p-3 px-10 text-white rounded-fulltransition duration-500">Explore unlisted shares</a>
                </div>   
            </section>
        </>
    )
}


export default ShareListed;