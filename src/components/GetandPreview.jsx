import { NavLink } from "react-router-dom";

function GetandPreview({nav=true}) {
    return ( 
        <div className={`flex gap-2 ${ nav ? "flex-row": "flex-row-reverse hidden lg:flex p-2"}`}>
                    <NavLink to="/pricing" className="nav-element-animate cursor-pointer text-black font-medium bg-white rounded-md py-3 px-4 hover:bg-blue-50">Get it now</NavLink>
                    <NavLink to="/preview" className="nav-element-animate cursor-pointer border font-medium border-accent px-6 py-3 rounded-md hover:bg-accent">Preview</NavLink>
                </div>
     );
}

export default GetandPreview;