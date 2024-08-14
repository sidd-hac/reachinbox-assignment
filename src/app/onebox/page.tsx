"use client"

import Onebox from "@/components/Onebox";

import { cn } from "@/lib/utils";
import { ChartNoAxesColumn, House, Inbox, Mail, Menu, Send, UserSearch } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {


    const { theme } = useTheme()
      const searchParams = useSearchParams();

      useEffect(() => {
        // This check ensures that the code only runs in the browser
        
            // Get the token from the URL search params
            const token = searchParams.get('token');
            // Check if the token exists and store it in localStorage
            if (token) {
                localStorage.setItem('token', token);
                console.log('Token saved to localStorage:', token);
            } else {
                console.log('No token found in URL');
            }
        
    }, [searchParams]); 


    const [selectedIcon, setSelectedIcon] = useState<string | null>("House");

    const handleIconClick = (iconName: string) => {
        setSelectedIcon(iconName);
    };



    return (
        <div className="flex min-h-screen">
            <aside className={cn("border-r-2 border-gray-700 flex flex-col justify-between items-center w-20 min-h-screen",
                { 'bg-gray-900': theme === 'dark' }
            )}>

                <div className="flex justify-center mt-4">
                    <Image src="/image.png" alt="logo" width={50} height={50} quality={100} />
                </div>




                <div className="flex flex-col justify-center items-center gap-4 mt-6 flex-1">
                    <span className={cn(`flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "House" ? "bg-gray-600" : "hover:bg-gray-700"} `, { ' text-white bg-slate-500 ': theme === 'light' && selectedIcon === "House" })}
                        onClick={() => handleIconClick("House")}
                    >
                        <House />
                    </span>
                    <span className={cn(`flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "UserSearch" ? "bg-gray-600" : "hover:bg-gray-700"} `, { ' text-white bg-slate-500 ': theme === 'light' && selectedIcon === "UserSearch" })}
                        onClick={() => handleIconClick("UserSearch")}
                    >
                        <UserSearch />
                    </span>
                    <span className={cn(`flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "Mail" ? "bg-gray-600" : "hover:bg-gray-700"} `, { ' text-white bg-slate-500 ': theme === 'light' && selectedIcon === "Mail" })}
                        onClick={() => handleIconClick("Mail")}>
                        <Mail />
                    </span>
                    <span className={cn(`flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "Send" ? "bg-gray-600" : "hover:bg-gray-700"} `, { ' text-white bg-slate-500 ': theme === 'light' && selectedIcon === "Send" })}
                        onClick={() => handleIconClick("Send")}
                    >

                        <Send />
                    </span>
                    <span className={cn(`flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "Menu" ? "bg-gray-600" : "hover:bg-gray-700"} `, { ' text-white bg-slate-500 ': theme === 'light' && selectedIcon === "Menu" })}
                        onClick={() => handleIconClick("Menu")}
                    >

                        <Menu />
                    </span>
                    <span className={cn(`relative flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "Inbox" ? "bg-gray-600" : "hover:bg-gray-700"} `, { ' text-white bg-slate-500 ': theme === 'light' && selectedIcon === "Inbox" })}
                        onClick={() => handleIconClick("Inbox")}>
                        <Inbox />
                        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs font-medium flex justify-center items-center">
                            3
                        </span>
                    </span>
                    <span className={cn(`flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "ChartNoAxesColumn" ? "bg-gray-600" : "hover:bg-gray-700"} `, { ' text-white bg-slate-500 ': theme === 'light' && selectedIcon === "ChartNoAxesColumn" })}
                        onClick={() => handleIconClick("ChartNoAxesColumn")}
                    >

                        <ChartNoAxesColumn />
                    </span>

                </div>


                <div className="flex justify-center mb-2">
                    <span className="rounded-full bg-green-800 w-10 h-10 flex justify-center items-center text-white">
                        AS
                    </span>
                </div>

            </aside >

            <Onebox selectedIcon={selectedIcon} />


        </div >
    );
};

export default Sidebar;
