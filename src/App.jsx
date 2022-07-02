import './App.css';
import { useEffect, useRef, useState } from 'react'
import Navbar from './components/navbar';
import Server from './components/Server';
import config from './config';
import { Link } from 'react-router-dom'
import { CgSpinnerTwo } from 'react-icons/cg'
function App() {
  const [servers, setServers] = useState(false)
  let serverElement = useRef([])
  useEffect(() => {
    config.servers().then(server => {
      for(const key of server) {
        serverElement.current.push(
          <Link to={`/server/${key.id}`}>
            <Server id={key.id} name={key.name} />
          </Link>
        )
      }
      setServers(serverElement.current)
    })
  }, [])
  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-center items-center mt-5 flex-wrap">
        {
          servers ?
          servers :
          <CgSpinnerTwo className="animate-spin dark:text-gray-200 text-gray-700" size="48" />
        }
      </div>
    </div>
  );
}

export default App;
