import '../App'
import { useParams } from 'react-router-dom'
import '../App.css'
import { CgSpinnerTwo } from 'react-icons/cg'
// import useResources from '../hooks/useResources'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import config from '../config'
export default function ServerInfo() {
    const serverId = useParams().id
    const [res, setRes] = useState(false)
    const [console, setConsole] = useState(false)
    useEffect(() => {
        config.getResourcesMethod(serverId).then(res => {
            setRes(res)
        })
        config.getConsoleMethod(serverId).then(res => {
            setConsole(res)
        })
        setInterval(async () => {
            config.getResourcesMethod(serverId).then(res => {
                setRes(res)
            })
            config.getConsoleMethod(serverId).then(res => {
                setConsole(res)
            })
        }, 3000)
    }, [serverId])
    return (
        <div className='App'>
            <Navbar />
            <div className='flex'>
                <div className="resources">
                    <div className="mx-auto my-auto">
                            {
                                res ?  
                                <>                       
                                    <p className="dark:text-white font-bold">
                                        Ram: {String(res.ram.used)}/{String(res.ram.limit)} <br />
                                        CPU: {String(res.cpu.used)}/{String(res.cpu.limit)} <br />
                                        Storage: {String(res.storage.used)}/{String(res.storage.limit)} <br />
                                        Uptime: {String(res.upTime)}
                                    </p>
                                    <div className="flex justify-center mt-6">
                                        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded mx-1 transition-all' onClick={(e) => {
                                            config.onStart(e, serverId)
                                        }}>Start</button>
                                        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded mx-1 transition-all' onClick={(e) => {
                                            config.onStop(e, serverId)
                                        }}>Stop</button>
                                        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded mx-1 transition-all' onClick={(e) => {
                                            config.onRestart(e, serverId)
                                        }}>Restart</button>
                                    </div>
                                </> :
                                <CgSpinnerTwo className="animate-spin dark:text-gray-200 text-gray-700" size="48" />
                            }
                        </div>
                    </div>
                <div className="flex w-[66vw] h-[53vh] dark:bg-slate-400 bg-gray-200 mx-auto mt-6 rounded-md shadow-xl">
                        {
                            console ?
                            <div className="m-7 flex">{console}</div> :
                            <div className="mx-auto text-center my-auto"><CgSpinnerTwo className="animate-spin dark:text-gray-200 text-gray-700" size="48" /></div>
                        }
                </div>
            </div>
        </div>
    )
}