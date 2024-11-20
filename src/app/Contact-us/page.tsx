
import { MdEmail, MdLocalPhone } from "react-icons/md";

export default function contactus(){
    return(
        <div className="bg-gray-100">
        
        <div className=" flex-1 flex min-wgray-900 h-[80vh] items-center justify-center">
           
        <div className="flex-col justify-center text-gray-900 items-center leading-9">
          <h1 className="font-extrabold md:text-2xl sm:xl pb-2 "> Office Hours </h1>
                <p>Monday to Friday 9:00-17:00 <br />
                Saturday, Sunday <br />Closed</p>
                 <h1 className="font-extrabold md:text-2xl sm:xl  pb-2">Email</h1>
                 <p className="flex"> <MdEmail className="text-gray-900 md:text-3xl sm:text-2xl"/>
                 Dreamdecors@gmail.com</p>
            </div>
            <div className="flex-col justify-center text-gray-900 items-center leading-9 ml-20">
                <h1 className="font-extrabold md:text-2xl sm:xl  pb-2">Adress</h1>
            <p>VICTORY ART Rotterdam Office: <br /> Westerstraat 42, 3016 DH Rotterdam, Netherlands <br /> VICTORY ART Slovak Office: <br /> Puškinova 1423/12, 052 01 Spišská Nová Ves, Slovak Republic</p>
        <h1 className="font-extrabold md:text-2xl sm:xl pb-2">Phone Number</h1> 
        <p className="flex"> <MdLocalPhone className="text-gray-900 md:text-3xl sm:text-2xl"/>
         +31642205508</p>
        </div>
        </div>
        
        </div>
    )
}