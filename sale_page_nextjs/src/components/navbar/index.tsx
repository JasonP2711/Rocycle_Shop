import { useState, useEffect } from "react";
import { IoMenu, IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from 'next/image'
import Img1 from '../../image/Your paragraph text.png'
function Navbar(prop:{}){
    const router = useRouter();
    const [statemenu, setStatemenu] = useState<boolean>(false);
    const [valueTop, setValueTop] = useState<string>("");
    useEffect(()=>{
        if(window.innerWidth < 750){
            setValueTop("hidden");
        }
        else{
            setValueTop("");
        }
    },[])

    const handlemenu = () =>{
        // statemenu == true ? setStatemenu(false) : setStatemenu(true)
        if(statemenu === true){
            setStatemenu(false)
            setValueTop("hidden")
        }
        else{
            setStatemenu(true)
            setValueTop("")
        }
    }
    const handleRouter = (path: any) =>{
        router.push(path);
    }
    return(
       <>
       <header  className="w-full">
        <div className="w-full">
        <nav className=" flex justify-between items-center mx-auto">
            <div className=" pl-5">
                <Image
                src={Img1}
                alt="My Image"
                width={85}
                height={85}
                className=''
                 />
            </div>
            <div className={`md:static absolute md:w-auto bg-white h-auto w-full top-[8%] ${valueTop} opacity-80  z-50`}>
                <ul className="flex md:flex-row flex-col h-auto p-3 ">
                    <li className="mr-10 cursor-pointer hover:text-teal-700 capitalize text-base" onClick={() => handleRouter("/")}>Home</li>
                    <li className="mr-10 cursor-pointer hover:text-teal-700 capitalize text-base" onClick={() => handleRouter("/product")}>Product</li>
                    <li className="mr-10 cursor-pointer hover:text-teal-700 capitalize text-base" onClick={() => handleRouter("/brand")}>Brand</li>
                    <li className="mr-10 cursor-pointer hover:text-teal-700 capitalize text-base" onClick={() => handleRouter("/accessory")}>Accessory</li>
                    <li className="mr-10 cursor-pointer hover:text-teal-700 capitalize text-base" onClick={() => handleRouter("/aboutus")}>About us</li>
                    <li className="flex ">
                        <input type="text" className="md:w-32 w-20 border rounded-3xl h-6"/>
                        <button className="pl-2"><IoSearchSharp/></button>
                    </li>
                </ul>
            </div>
           
            <div className="pr-10 py-3 flex items-center">
                <button className="text-white bg-cyan-400 border-solid border-2 border-indigo-600 w-20 rounded-full pl-2 pr-2 pt-1 pb-1 hover:bg-cyan-300">Sign In</button>
                {
                    statemenu === true ? <IoCloseSharp onClick={handlemenu}  className="cursor-pointer w-8 h-12 pl-3 md:hidden"/> : <IoMenu onClick={handlemenu} className="cursor-pointer w-8 h-12 pl-3 md:hidden"/>  
                }
                
            </div>
        </nav>
        </div>
       </header>
       
       
       </>
    )
}

export default Navbar