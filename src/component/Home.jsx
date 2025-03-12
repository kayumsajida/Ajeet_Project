import Banner from "./Banner";
import Blog from "./Blog";
import FAQ from "./FAQ";
import FDInterest from "./FD_Interest";
import JourneyWealthCreation from "./JourneyWealthCreation";
import ShareListed from "./ShareListed";
import StartInvest from "./StartInvest";
import TestimonialSlider from "./TesimonialsSLider";

const Login = () => {
    return (        
        <>
            <Banner />
            <ShareListed />
            <FDInterest />
            <JourneyWealthCreation />
            <TestimonialSlider />
            <Blog />
            <FAQ />
            <StartInvest />
        </>
    )
}

export default Login;