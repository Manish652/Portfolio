import React, { useEffect, useState } from 'react'
import {Moon, Sun} from "lucide-react"
import {cn} from '@/lib/utils.js'
function ThemeToggele() {

    const [isDarkMode,setDarkMode] = useState(false);

    useEffect(()=>{
        const storeTheme = localStorage.getItem('theme');

        if(storeTheme==="dark"){
            setDarkMode(true)
            document.documentElement.classList.add("dark");
        }else{
            setDarkMode(false)
            document.documentElement.classList.remove("dark");
        }

    },[])

    const toggleTheme =()=>{
        if(isDarkMode){
            setDarkMode(false)
            document.documentElement.classList.remove("dark");

        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setDarkMode(true)
        }
    };
  return (

    <button onClick={toggleTheme}  className={cn(
        "fixed top-5 right-5 z-50 p-3 rounded-full shadow-xl",
        "bg-white text-black dark:bg-black dark:text-white",
        "hover:scale-110 active:scale-95 transition-all duration-300",
        "border border-gray-300 dark:border-gray-700",
        "max-sm:hidden"
      )} >
{isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 transition-colors duration-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 transition-colors duration-300" />
      )}

    </button>
  )
}

export default ThemeToggele