function Close({open}) {
    return ( 
        <div className={`w-full cursor-pointer ${open ? "block" : "hidden" }`}>
            <div className="w-6 h-0.5 absolute right-4  bg-white rotate-45"></div>
            <div className="w-6 h-0.5 absolute right-4 bg-white -rotate-45"></div>
        </div>
     );
}

export default Close;