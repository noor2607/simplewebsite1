import { FaFacebook, FaInstagram , FaTwitter , FaDiscord, FaCopyright   } from "react-icons/fa";


export default function footer (){
    return(
        <div className="h-24 min-w-full bg-gray-200 flex items-center">
            <div>
                <div className="flex justify-start md:p-6 sm:p-3 items-center sm:items-wrap">
                <FaCopyright className="text-2xl" />
                2017 Dream Decors. All Rights Reserved. Privacy Policy.
                </div>
        </div>

            <div className="flex items-end ">
                <div className="text-2xl flex lg:ml-[700px]  sm:[300px]">
<FaFacebook className="" />
<FaInstagram />
<FaTwitter />
<FaDiscord />


                </div>
            </div>
        </div>
    )
}