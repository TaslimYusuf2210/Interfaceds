import Interface from "./Interfaces";
import { FaStar } from "react-icons/fa6";
import test1 from "../assets/testimonial1.png"

function Testimonials() {
    return ( 
        <div className="">
            <div className="text-left lg:max-w-[65%] space-y-8">
                <Interface></Interface>
                <h1 className="md:text-5xl text-4xl font-bold">
                    Testimonials
                </h1>
                <p className="mb-16 font-medium text-brand">
                    Discover what designers and developers around the world are saying about the Interfaces
                    Design System. Their experiences showcase how our system has revolutionized workflows and
                    enhanced project outcomes across various industries.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="border-accent rounded-xl px-6 border">
                    <div className="flex gap-2 py-6">
                        <FaStar  className="md:text-2xl text-xl text-white"/>
                        <FaStar  className=" md:text-2xl text-xl text-white"/>
                        <FaStar  className=" md:text-2xl text-xl text-white"/>
                        <FaStar  className="md:text-2xl text-xl text-white"/>
                        <FaStar  className=" md:text-2xl text-xl text-white"/>
                    </div>
                    <div className="border-y py-6 border-accent">
                        <div className="flex gap-4">
                            <img className="size-12 rounded-full border border-accent" src={test1} alt="" />
                            <div className="flex flex-col">
                                <header className="font-medium">Dudu</header>
                                <p className="text-brand text-sm">Founder, Toolfolio</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-brand py-6">
                        "Im proud to say that i was the first person to get Interfaces design <br className="lg:block hidden"/>
                        system and have 0 regrets. <br /> <br className="lg:block hidden"/>
                        Its simple, functional, elegant and most importantly versatile. <br className="lg:block hidden"/>
                        <br className="lg:block hidden"/>
                        I'm currently using some of the components as the basis of <br className="lg:block hidden"/>
                        redesigning my startup, <span className="text-white">@Toolfolio</span> — It goes without saying that I <br className="lg:block hidden"/>
                        recommend this Design System."
                    </div>
                    
                </div>
                <div className="border-accent rounded-xl px-6 border">
                    <div className="flex gap-2 py-6">
                        <FaStar  className=" md:text-2xl text-xl text-white"/>
                        <FaStar  className="md:text-2xl text-xl text-white"/>
                        <FaStar  className=" md:text-2xl text-xl text-white"/>
                        <FaStar  className=" md:text-2xl text-xl text-white"/>
                        <FaStar  className=" md:text-2xl text-xl text-white"/>
                    </div>
                    <div className="border-y py-6 border-accent">
                        <div className="flex gap-4">
                            {/* <img className="size-12 rounded-full border border-accent" src={test1} alt="" /> */}
                            <div className="size-12 rounded-full border border-accent bg-accent"></div>
                            <div className="flex flex-col">
                                <header className="font-medium">Your Name</header>
                                <p className="text-brand text-sm">Your Position</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-brand py-6">
                        "Would you like to share your experience with Interfaces Design <br className="lg:block hidden"/>
                        System? We'd love to hear how our design system has helped your <br />
                        workflow and projects. <br /> <br className="lg:block hidden"/>

                        Please send your testimonial to <span className="text-white">testimonial@interfaces.supply</span> <br /> <br />

                        Your feedback helps us improve and inspires others in the design community." <br />
                    </div>
                    
                </div>
            </div>

        </div>
     );
}

export default Testimonials;