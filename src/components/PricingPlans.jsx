import Interface from "./Interfaces";
import { IoMdCheckmark } from "react-icons/io";

function PricingPlans() {
    return ( 
        <div className="grid text-center">
            <div className="space-y-8 text-center grid place-items-center">
                <Interface></Interface>
                <h1 className="md:text-5xl text-4xl font-bold">
                        Pricing Plans
                    </h1>
                    <p className="mb-16 font-medium text-brand">
                        Our design system streamlines your workflow, ensuring consistency and efficiency across all <br className="lg:block hidden"/>
                        projects. With a minimalist approach, you can focus on creativity without the clutter.
                    </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full text-left space-y-6 border border-accent rounded-xl p-6">
                    <div className="space-y-2 border-b border-b-accent pb-6">
                        <h4 className="text-2xl font-bold">Team</h4>
                        <p className="text-sm font-medium text-brand">Perfect for startups and small teams</p>
                    </div>
                    <div className="space-y-4 border-b border-b-accent pb-6">
                        <p className="text-4xl font-bold">$299</p>
                        <button type="button" className="text-left w-full text-black bg-white py-4 px-6 rounded-md cursor-pointer">Get it now</button>
                    </div>
                    <ul className="space-y-5 text-sm">
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Figma Variables</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Light/Dark Mode</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Component Properties</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Auto Layout 5.0</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> 5-User License</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Use on Unlimited Project</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Lifetime Updates</li>
                        
                    </ul>
                </div>
                <div className="w-full text-left space-y-6 border border-accent rounded-xl p-6">
                    <div className="space-y-2 border-b border-b-accent pb-6">
                        <div className="flex gap-2">
                            <h4 className="text-2xl font-bold">Pro</h4>
                            <button className="rounded-sm font-medium bg-white text-accent p-0.5">POPULAR</button>
                        </div>
                        <p className="text-sm font-medium text-brand">Perfect for professional designers</p>
                    </div>
                    <div className="space-y-4 border-b border-b-accent pb-6">
                        <p className="text-4xl font-bold">$129</p>
                        <button type="button" className="text-left w-full text-black bg-white py-4 px-6 rounded-md cursor-pointer">Get it now</button>
                    </div>
                    <ul className="space-y-5 text-sm">
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Figma Variables</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Light/Dark Mode</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Component Properties</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Auto Layout 5.0</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Single User License</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Use on Unlimited Project</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Lifetime Updates</li>
                        
                    </ul>
                </div>
                <div className="w-full text-left space-y-6 border border-accent rounded-xl p-6">
                    <div className="space-y-2 border-b border-b-accent pb-6">
                        <h4 className="text-2xl font-bold">Enterprise</h4>
                        <p className="text-sm font-medium text-brand">Perfect for large organizations and enterprises</p>
                    </div>
                    <div className="space-y-4 border-b border-b-accent pb-6">
                        <p className="text-4xl font-bold">$599</p>
                        <button type="button" className="text-left w-full text-black bg-white py-4 px-6 rounded-md cursor-pointer">Get it now</button>
                    </div>
                    <ul className="space-y-5 text-sm">
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Figma Variables</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Light/Dark Mode</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Component Properties</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Auto Layout 5.0</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> 15-User License</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Use on Unlimited Project</li>
                        <li className="flex items-center font-medium gap-2 text-brand"><IoMdCheckmark /> Lifetime Updates</li>
                        
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default PricingPlans;