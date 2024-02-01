import { useState, useEffect } from "react";

function Navbar(prop:{}){
    return(
       <>
       <ul className="flex bg-slate-300 justify-end mt-3 p-3 ">
        <li className="mr-10 cursor-pointer hover:text-teal-700">Home</li>
        <li className="mr-10 cursor-pointer hover:text-teal-700">Product</li>
        <li className="mr-10 cursor-pointer hover:text-teal-700">Brand</li>
        <li className="mr-10 cursor-pointer hover:text-teal-700">Accessory</li>
        <li className="mr-10 cursor-pointer hover:text-teal-700">About us</li>
       </ul>
       </>
    )
}

export default Navbar