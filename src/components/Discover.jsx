import Interface from "./Interfaces";
import GetandPreview from "./GetandPreview";
import Carousel from "./carousel";

function Discover() {
    return ( 
        <div className="flex flex-col-reverse lg:gap-6 lg:flex-row pt-28 md:pt-10 lg:pt-0">
            <div className=" text-left md:space-y-8 space-y-5 w-full">
                <Interface/>
                <h1 className="md:text-5xl text-4xl md:leading-16 leading-12 font-bold">
                    Discover the power <br />
                    of Minimalist Design
                </h1>
                <p className="mb-16 font-medium text-brand ">
                    The Interfaces Design System streamlines your design process with a
                    focus on simplicity and efficiency. Elevate your projects with our
                    intuitive components and cohesive style.
                </p>
                <div className="space-y-6 mb-16">
                    <div className="space-y-3 p-6 border border-accent rounded-xl max-w-[470px] pr-8">
                        <h5 className="font-semibold text-2xl">Minimal Modular Design</h5>
                        <p className="text-brand font-medium">
                            Emphasizes “less is more” with a clean grid system <br />
                            and flexible style combinations, enabling rapid <br />
                            creation of elegant interfaces.
                        </p>
                    </div>
                    <div className="space-y-3 p-6 border border-accent rounded-xl max-w-[470px] pr-8">
                        <h5 className="font-semibold text-2xl">DataVis-Centric Design</h5>
                        <p className="text-brand font-medium ">
                            Lightweight, customizable data viz components <br />
                            (charts, dashboards, cards) for clear data display.
                        </p>
                    </div>
                </div>
            <GetandPreview></GetandPreview>
            </div>
            <div className="w-full py-28">
                <Carousel/>
            </div>
        </div>
     );
}

export default Discover;