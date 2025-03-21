import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <div className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-zinc-800 animate-gradient">
                <div className="w-full max-w-[900px] mx-auto bg-white p-4 rounded-b-lg rounded-t-lg pt-15 pb-15">
                    <div className="flex flex-col xl:flex-row md:flex-row gap-5 items-center justify-center">
                        <div className="w-1/2">
                            <img src="src/assets/images/registeration.svg" className="w-full h-full object-cover" alt="Registration" />
                        </div>
                        <div className="w-1/2 px-10">
                            <div className="flex flex-col gap-5">
                                <Link to="/" className="inline-flex items-center">
                                    <img src="src/assets/images/logo.svg" alt="" />
                                    <span className="text-2xl font-bold ms-2">Frontier Asia Capital</span>
                                </Link>
                                <h1 className="text-lg font-bold">Sign Up</h1>
                                <p>
                                    Sign up to your account to continue and access your <strong>personalized features</strong>.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <input type="text" placeholder="Username" name="" className="w-full text-md placeholder:text-sm border border-gray-300 focus:outline-0 p-2 px-4 duration-500 hover:border-primary rounded-full" />
                                <input type="text" placeholder="Enter Email" name="email" className="w-full text-md placeholder:text-sm border border-gray-300 focus:outline-0 p-2 px-4 duration-500 hover:border-primary rounded-full" />
                                <input type="password" placeholder="Password" name="password" className="w-full text-md placeholder:text-sm border border-gray-300 focus:outline-0 p-2 px-4 duration-500 hover:border-primary rounded-full" />
                                <button type="submit" className="w-full text-white font-bold btn-primary p-2 cursor-pointer">Sign Up</button>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <div className="text-sm">
                                    Already have an account? <Link to="/login" className="font-bold hover:text-primary duration-500">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;