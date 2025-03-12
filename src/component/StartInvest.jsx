import { Link } from "react-router-dom";

const StartInvest = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-13 px-4 lg:px-0 bg-blue-950 pt-50 pb-50 bg-[url(src/assets/images/pattern.webp)] bg-cover bg-no-repeat">
                <div className="container">
                    <h2 className="text-white text-2xl lg:text-7xl md:text-7xl w-full lg:w-4xl font-medium mx-auto text-center">
                        Start your alternate investment journey today.
                    </h2>
                    <div class="flex flex-col lg:flex-row items-center justify-center gap-2 mt-15">
                        <Link to="/" class="w-full lg:w-52 text-center bg-amber-600 p-3 px-10 text-white rounded-full hover:bg-amber-800 transition duration-500">Get Started</Link>
                        <Link to="/" class="w-full lg:w-52 text-center text-white border border-neutral-300 p-3 px-10 rounded-full hover:text-black hover:bg-neutral-100 transition duration-500">Download the app</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartInvest;