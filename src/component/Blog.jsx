const Blog = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row gap-4 pt-20 pb-20 bg-gradient-to-tr from-gradientprimary to-gradientsecondary">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="flex flex-wrap lg:flex-row items-center justify-between mb-8">
                        <h2 className="text-2xl lg:text-4xl font-bold text-white">From the blog</h2>
                        <a href="#" className="text-white font-medium underline hover:no-underline transition duration-500">See More</a>
                    </div>    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div className="bg-white transition-all duration-500 group">
                            <div className="overflow-hidden">
                                <img src="src/assets/images/blog.jpg" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                            </div>
                            <div className="p-4">
                               <h2 className="text-1xl mb-2 font-bold">Does F.I.R.E really burn bright?</h2>
                               <p className="text-neutral-400 text-sm">By Vijay Kuppa · 09 Feb, 2025</p>
                            </div>
                        </div>
                        <div className="bg-white transition-all duration-500 group">
                            <div className="overflow-hidden">
                                <img src="src/assets/images/blog2.jpg" className="h-72 w-full object-cover transition-all duration-500 group-hover:scale-110" alt="" />
                            </div>
                            <div className="p-4">
                               <h2 className="text-1xl mb-2 font-bold">Top Financial Risks for 2025 You Should Know</h2>
                               <p className="text-neutral-400 text-sm">By Vijay Kuppa · 09 Feb, 2025</p>
                            </div>
                        </div>
                        <div className="bg-white transition-all duration-500 group">
                            <div className="overflow-hidden">
                                <img src="src/assets/images/blog.jpg" className="h-72 w-full object-cover transition-all duration-500 group-hover:scale-110" alt="" />
                            </div>
                            <div className="p-4">
                               <h2 className="text-1xl mb-2 font-bold">Does F.I.R.E really burn bright?</h2>
                               <p className="text-neutral-400 text-sm">By Vijay Kuppa · 09 Feb, 2025</p>
                            </div>
                        </div>
                    </div>                
                </div>
            </section>
        </>
    )
}

export default Blog;