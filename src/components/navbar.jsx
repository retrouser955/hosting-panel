import React from 'react'
import config from "../config"
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar() {
    const [isDarkmode, setIsDarkmode] = React.useState(Boolean(localStorage.getItem('darkmode')))
    React.useEffect(() => {
        const isDarkmode = localStorage.getItem('darkmode')
        const bodyClass = window.document.body.classList
        if(isDarkmode === "true" && isDarkmode !== undefined) {
            bodyClass.add('dark')
        } else {
            setIsDarkmode(false)
        }
    }, [])
    let arrayOfExtras = []
    for(const key of config.navBarExtras) {
        arrayOfExtras.push(
            <a href={key.url} className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-slate-200 hover:text-white mr-4">
                {key.name}
            </a>
        )
    }
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap p-6 dark:bg-slate-800 bg-gray-400 shadow-2xl">
              <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={config.company.logo} alt="company logo" className="fill-current h-8 w-8 mr-2" />
                <span className="font-semibold text-xl tracking-tight">{config.company.name}</span>
              </div>
              <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-white dark:text-black dark:border-black border-white hover:text-white hover:border-white">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                  <a href={config.company.homepage} className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-slate-200 hover:text-white mr-4">
                    Home
                  </a>
                  {arrayOfExtras}
                </div>
                <div onClick={() => {
                    const body = window.document.body.classList
                    if(body.contains('dark')) {
                        body.remove('dark')
                        setIsDarkmode(false)
                        localStorage.setItem('darkmode', false)
                    } else {
                        body.add('dark')
                        setIsDarkmode(true)
                        localStorage.setItem('darkmode', true)
                    }
                }}>
                    {isDarkmode ? <FaSun size="28" className="transition-all text-black dark:text-slate-200"/> : <FaMoon size="28" className="transition-all text-black dark:text-slate-200"/> }
                </div>
              </div>
            </nav>
        </div>
    )
}