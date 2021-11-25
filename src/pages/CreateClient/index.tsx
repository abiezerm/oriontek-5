import { useState, useEffect } from "react"

import { LocationMarkerIcon, UsersIcon, SortAscendingIcon } from '@heroicons/react/solid'
import { getClients } from "../../services/api/Clients"

const CreateClient = ()=> {

    const [clients, setClients]: any = useState([])


    function FormInput() {
        return (
          <div className="my-3 border border-gray-400 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="name" className="block text-xs font-medium text-gray-900">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Jane Doe"
            />
          </div>
        )
    }


  return (
    <>
        <div className="m-9 items-center justify-center flex">
            <div className="bg-gray-100 w-2/4 border border-gray-200 p-4 rounded-md">
                <div className="form">
                    <h2 className="font-semibold text-2xl text-gray-700">
                        Create a new client
                    </h2>
                    <div className="inputGroup py-3">
                        <FormInput/>
                        <FormInput/>
                        <FormInput/>
                        <fieldset>
                            <legend className="text-lg font-medium text-gray-900">Members</legend>
                            <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                                <div className="relative flex items-start py-4">
                                    <div className="min-w-0 flex-1 text-sm">
                                    <label htmlFor={`person`} className="font-medium text-gray-700 select-none">
                                        San Pedro
                                    </label>
                                    </div>
                                    <div className="ml-3 flex items-center h-5">
                                    <input
                                        id={`person`}
                                        name={`person`}
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    />
                                    </div>
                                </div>
                                <div className="relative flex items-start py-4">
                                    <div className="min-w-0 flex-1 text-sm">
                                    <label htmlFor={`person`} className="font-medium text-gray-700 select-none">
                                        San Pedro
                                    </label>
                                    </div>
                                    <div className="ml-3 flex items-center h-5">
                                    <input
                                        id={`person`}
                                        name={`person`}
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    />
                                    </div>
                                </div>
                                <div className="relative flex items-start py-4">
                                    <div className="min-w-0 flex-1 text-sm">
                                    <label htmlFor={`person`} className="font-medium text-gray-700 select-none">
                                        San Pedro
                                    </label>
                                    </div>
                                    <div className="ml-3 flex items-center h-5">
                                    <input
                                        id={`person`}
                                        name={`person`}
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateClient