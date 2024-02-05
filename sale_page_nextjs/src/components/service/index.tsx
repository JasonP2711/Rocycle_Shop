import { MdOutlineDirectionsBike } from "react-icons/md";
import { FaTools, FaStoreAlt  } from "react-icons/fa";
import { RiLoopLeftLine } from "react-icons/ri";
function Service(props:{}){
return(
    <>
    <div className="hidden md:block md:flex-col md:items-center md:justify-center md:mt-8 ">
        <p className="md:text-center md:text-4xl font-bold text-gray-600">Online bike shopping made easy</p>
        <div className="mt-5">
            <ul className="md:flex md:items-center md:justify-center">
                <li className=" pt-6 text-center md:ml-12 border md:h-96">
                    <div>
                        <div className="ml-12" >
                            <MdOutlineDirectionsBike className="w-36 h-36"/>
                        </div>  
                        <p className="m-2 text-2xl font-bold w-52">Want to ride today?</p>
                    </div>
                    <div>
                        <p className="w-60 italic">
                            your perfect bike may already be in a store near you. Browse local invetory online for the fastest availability. 
                        </p>
                    </div>
                </li>
                <li className=" pt-6 text-center md:ml-12 border md:h-96">
                    <div>
                        <div className="ml-11" >
                            <FaTools className="w-32 h-32 m-3"/>
                        </div>   
                        <p className="m-2 text-2xl font-bold w-52">Professional assembly</p>
                    </div>
                    <div>
                        <p className="w-60 italic">
                            Upon arrival, your bike will be assembled by certified bicycle technicians and make ready to pick up or deliver to your home. 
                        </p>
                    </div>
                </li>
                <li className=" pt-6 text-center md:ml-12 border md:h-96">
                    <div>
                        <div className="ml-12" >
                            <RiLoopLeftLine className="w-36 h-36"/>
                        </div>
                        <p className="m-2 text-2xl font-bold w-52">30 day no hassle returns</p>
                    </div>
                    <div>
                        <p className="w-60 italic">
                            If you&#39;re not in love with your bike within the first thirty day, we will take it without any additional charge or hassle.
                        </p>
                    </div>
                </li>
                <li className=" pt-6 text-center md:ml-12 border md:h-96">
                    <div>
                        <div className="ml-12" >
                            <FaStoreAlt className="w-36 h-36"/>
                        </div>
                        <p className="m-2 text-2xl font-bold w-52">Local service and support</p>
                    </div>
                    <div>
                        <p className="w-60 italic">
                            your local bike shop has the knowledge product, and expertise to help you get the most out of your new bike.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </>
)
}
export default Service