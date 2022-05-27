import Image from "next/image"
import { ChevronDownIcon, HomeIcon, SearchIcon , MenuIcon } from '@heroicons/react/solid'
import { BellIcon , ChatIcon , GlobeIcon,PlusIcon, SparklesIcon , SpeakerphoneIcon,VideoCameraIcon, } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from "next-auth/react"
function Header() {
    const{data:session}=useSession()
    return <div className=" sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm ">

        <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
            <Image objectFit="contain" src="https:links.papareact.com/fqy " layout="fill" />
        </div>

        <div className="mx-7 flex items-center xl:min-w-[300px] ">
            <HomeIcon className="h-5 w-5" />
            <p className="flex-1 ml-2 hidden lg:inline" >Home</p>
            <ChevronDownIcon className="h-5 w-5" />
        </div>
        <form className="flex flex-1 items-center space-x-2 bg-gray-100 rounded-sm border border-gray-200 px-3 py-1 ">
            <SearchIcon className="h-6 w-6 text-gray-400 "/>
            <input type="text" placeholder="Search on reddit" className="outline-none flex-1 bg-transparent" />
            <button hidden />
        </form>
        <div className="flex text-gray-500 space-x-2 mx-5 items-center hidden lg:inline-flex">
<SparklesIcon className="icon"/>
<GlobeIcon className="icon"/>
 <VideoCameraIcon className="icon"/>
 <hr className="h-10 border-gray-100" />
 <ChatIcon className="icon"/>
 <BellIcon className="icon"/>
 <PlusIcon className="icon"/>
<SpeakerphoneIcon className="icon"/>
        </div>
        <div className="ml-5 items-center lg:hidden">
            <MenuIcon className="icon"/>
        </div>
        {
            session?(
                <div onClick={()=>signOut()} className="hidden lg:flex items-center space-x-2 border border-x-gray-100 p-2  cursor-pointer">
        <div className="relative h-5 w-5 flex-shrink-0" >
            <Image src="https://links.papareact.com/23l"
            objectFit="contain" layout="fill"/>
         </div>
         <p className="text-gray-400">Sign Out</p>
        </div>

            ):(
                <div onClick={()=>signIn()} className="hidden lg:flex items-center space-x-2 border border-x-gray-100 p-2  cursor-pointer">
        <div className="relative h-5 w-5 flex-shrink-0" >
            <Image src="https://links.papareact.com/23l"
            objectFit="contain" layout="fill"/>
         </div>
         <p className="text-gray-400">Sign In</p>
        </div>

            )
        }
        
    </div>


}
export default Header