function Menu({open}) {
    return ( 
        <div className={`w-6 space-y-1 cursor-pointer ${open ? "hidden" : "block"} `}>
            <div className="border-white border-b-2 w-full"></div>
            <div className="border-white border-b-2 w-full"></div>
            <div className="border-white border-b-2 w-full"></div>
            <div className="border-white border-b-2 w-full"></div>
        </div>
     );
}

export default Menu;