import { useState, useEffect } from "react"

import { LocationMarkerIcon, UsersIcon, SortAscendingIcon } from '@heroicons/react/solid'
import { getClients } from "../../services/api/Clients"
import { collection, onSnapshot } from "@firebase/firestore"
import { db } from "../../services/api/fireBase"

function SearchBar() {
  return (
    <div className="m-9">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Search clients
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            placeholder="..."
          />
        </div>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Sort</span>
        </button>
      </div>
    </div>
  )
}

const Home = ()=> {

    interface client {
        locations: string[]
        name: string
        routers: number
    }

    const [clients, setClients]: any = useState<[client]>([{
        locations: [""],
        name: "",
        routers: 0
    }])

    useEffect(()=>{

        const clientsColectionRef = collection(db, "clients")
        onSnapshot(clientsColectionRef, (res)=>{
            setClients(res.docs.map( (data)=> data.data() ))
        })
        
    }, [])

  return (
    <>
        <SearchBar/>
        <div className="shadow overflow-hidden sm:rounded-md m-9">
            <div className="companies">
                <ul role="list" className="divide-y divide-gray-200">
                    {clients.map((client: client) => (
                    <li key={client.name}>
                        <a href="#" className="hover:bg-gray-50 flex">
                            <div className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-indigo-600 truncate">{client.name}</p>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                    <p className="flex items-center text-sm text-gray-500">
                                    <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    {client.routers}
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
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default Home