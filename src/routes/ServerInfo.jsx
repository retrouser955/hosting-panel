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
    useEffect(() => {
        config.getResourcesMethod(serverId).then(res => {
            setRes(res)
        })
    }, [serverId])
    return (
        <div className='App'>
            <Navbar />
            <div className="resources">
                <div className="mx-auto my-auto">
                    {
                        res ?                         
                        <p className="dark:text-white font-bold">
                            Ram: {String(res.ram.used)}/{String(res.ram.limit)} <br />
                            CPU: {String(res.cpu.used)}/{String(res.cpu.limit)} <br />
                            Storage: {String(res.storage.used)}/{String(res.storage.limit)} <br />
                            Uptime: {String(res.upTime)}
                        </p> :
                        <CgSpinnerTwo className="animate-spin dark:text-gray-200 text-gray-700" size="48" />
                    }
                </div>
            </div>
        </div>
    )
}