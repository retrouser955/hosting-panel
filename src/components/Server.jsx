export default function Server({ id, name }) {
  return (
    <div className="bg-gray-400 dark:bg-gray-600 w-[1000px] h-20 m-3 rounded-md hover:shadow-xl flex cursor-pointer transition-all duration-300">
        <div className="h-14 w-3 bg-black rounded ml-2 my-auto dark:bg-gray-300"></div>
        <div className="ml-3 my-auto">
            <p className="dark:text-white">Server Id: {id} <br /> Server name: {name}</p>
        </div>
    </div>
  )
}