import { Link } from "react-router-dom";

const StartInvest = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-13 px-4 lg:px-0 bg-primary pt-50 pb-50 bg-[url(src/assets/images/pattern.webp)] bg-cover bg-no-repeat">
                <div className="container">
                    <h2 className="text-white text-2xl lg:text-7xl md:text-7xl w-full lg:w-4xl font-medium mx-auto text-center">
                        Start your alternate investment journey today.
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-2 mt-15">
                        <Link to="/" className="w-full lg:w-52 text-center dark-btn">Get Started</Link>
                        <Link to="/" className="w-full lg:w-60 text-center outline-white-btn">Download the app</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartInvest;