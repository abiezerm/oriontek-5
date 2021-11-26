import { useState, useEffect } from "react"
import { LocationMarkerIcon, SortAscendingIcon, WifiIcon } from '@heroicons/react/solid'
import { getClients } from "../../services/api/Clients"
import { typeClient } from "../../models/interfaces/Client"

const Home = ()=> {

  useEffect(()=>{

    getClients().then((res)=>{
      setClients(res.map( (data)=> data.data() ))
    })
      
  }, [])

  const [clients, setClients]: any = useState<[typeClient]>([{
    locations: [""],
    name: "",
    routers: ""
  }])

  const [search, setSearch] = useState("")

  const filterItems = (query: any) => {

    var result = clients.filter((element: any)=>
      query.split().filter((query: any)=> element.locations.indexOf(query) > -1).length || element.name.toLowerCase().indexOf(query.toLowerCase()) > -1 || element.routers?.toString().indexOf(query.toLowerCase()) > -1
    );

    return result
    
  }

  return (
    <>
      <div className="m-9">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Search clients
        </label>
        <div className="mt-1 flex rounded-md shadow-sm border border-gray-100">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <WifiIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              value={search}
              onChange={(e)=> {
                setSearch(e.target.value)
              }}
              autoComplete="off"
              className="focus:ring-gray-500 focus:border-gray-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-r-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
          >
            <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Sort</span>
          </button>
        </div>
      </div>
      <div className="shadow overflow-hidden sm:rounded-md m-9 border border-gray-200">
          <div className="companies">
              <ul role="list" className="divide-y divide-gray-200">
                {
                  filterItems(search).length > 0
                    ?
                      filterItems(search).map((client: typeClient) => (
                        <li key={client.name}>
                            <div className="bg-gray-50 flex">
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-600 truncate">{client.name}</p>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                        <WifiIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        Routers: {client.routers}
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="m-3 flex-shrink-0 flex w-2/4">
                                    {
                                        client.locations.map((res)=>(
                                            <div key={"key " + res + Math.random()}>
                                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                    <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    {res}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </li>
                      ))
                    :
                      <div className="p-5 font-semibold text-xl">
                        No results
                      </div>
                }
              </ul>
          </div>
      </div>
    </>
  )
}

export default Home