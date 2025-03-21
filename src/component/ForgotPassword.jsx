import { Link } from "react-router-dom";
const ForgotPassword = () => {
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
                                <Link to="/" className="text-4xl font-bold">
                                    Ecommerce Project
                                </Link>
                                <h1 className="text-lg font-bold">Reset Your Password</h1>
                                <p>
                                    We will send you an email to reset your password
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">                                
                                <input type="text" placeholder="Enter Email" name="email" className="w-full text-md placeholder:text-sm border border-gray-300 focus:outline-0 p-2 px-4 duration-500 hover:border-red-500 rounded-full" />
                                <button type="submit" className="w-full text-white font-bold bg-red-500 text-md duration-500 cursor-pointer p-2 rounded-full hover:bg-red-600">Reset your password</button>
                            </div>
                            <div className="flex flex-col gap-2 mt-3">
                                <div className="text-sm">
                                    Already have an account? <Link to="/login" className="font-bold hover:text-red-500 duration-500">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;