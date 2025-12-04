import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Revolutionalize from "../components/Revolutionalize";
import Testimonials from "../components/Testimonials";
import PricingPlans from "../components/PricingPlans";
import Connect from "../components/Connect";
import Elevate from "../components/Elevate";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"

function Home() {
    const location = useLocation()

    useEffect(() => {
        if (location.state?.scrollTo === "connect") {
            document.getElementById("connect")?.scrollIntoView({ behavior: "smooth"})
        }
    }, [location]);

    return ( 
        <div className="lg:px-20 md:px-14 px-8  pt-16 pb-36 lg:pb-96 lg:space-y-70 space-y-32">
            <Hero></Hero>
            <Discover></Discover>
            <Revolutionalize></Revolutionalize>
            <Testimonials></Testimonials>
            <PricingPlans></PricingPlans>
            <div id="connect">
            <Connect></Connect>
            </div>
            <Elevate></Elevate>
        </div>
     );
}

export default Home;