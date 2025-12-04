import Interface from "./Interfaces";
import GetandPreview from "./GetandPreview";

function Elevate() {
    return ( 
        <div className="space-y-12">
            <div className="border-b border-b-accent pb-10 space-y-8">
                <Interface></Interface>
                <h1 className="md:text-5xl text-4xl font-bold">Elevate Your Design Experience</h1>
                <p className="font-medium text-brand">
                Join us and discover how our design system can transform your projects into stunning realities.
                </p>
            </div>
            <GetandPreview></GetandPreview>
        </div>
     );
}

export default Elevate;