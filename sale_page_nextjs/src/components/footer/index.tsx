import { useState } from "react";

function Footer(prop:{}){
    return(
        <>
            <footer className="h-20 bg-neutral-300 mt-20">
                <div>
                    <ul className="flex items-center justify-center">
                        <li className="h-auto mr-10 w-52 border">
                            <h2 className="text-center">Company information</h2>
                        </li>
                        <li className="h-auto mr-10 w-52 border">
                            <h2 className="text-center">Help</h2>
                        </li>
                        <li className="h-auto mr-10 w-52 border">
                            <h2 className="text-center">Connect With Us</h2>
                        </li>
                        <li className="h-auto w-52 border">
                            <h2 className="text-center">Secure Online Shopping</h2>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer