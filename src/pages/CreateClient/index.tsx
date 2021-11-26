import { addDoc, collection } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { typeClient } from "../../models/interfaces/Client"
import { db } from "../../services/api/fireBase"
    
const CreateClient = ()=> {
    
    const [client, setClient]: any = useState<typeClient>({
        name: "",
        routers: "",
        locations: []
    })

    const clientsColectionRef = collection(db, "clients")

    const createNew = async ()=>{
        await addDoc(clientsColectionRef, {...client})
    }

    useEffect(()=>{
          
    }, [])


    
    return (
        <>
            <div className="m-9 items-center justify-center flex">
                <div className="w-2/4 border border-gray-200 p-4 rounded-md">
                    <div className="form">
                        <h2 className="font-semibold text-2xl text-gray-700">
                            Create a new client
                        </h2>

                        <div className="my-3">
                            <div className="border border-gray-400 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-600 focus-within:border-gray-600">
                                <label htmlFor={"clientName"} className="block text-xs font-medium text-gray-900">
                                    Name
                                </label>
                                <input
                                type={"text"}
                                name={"clientName"}
                                key={"clientname"}
                                value={client.name}
                                onChange={
                                    (e: any) => {
                                        setClient({ ...client, "name": e.target.value });
                                    }
                                }
                                className="block w-full bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                                placeholder={'Client name...'}
                                />
                            </div>
                        </div>

                        <div className="my-3">
                            <div className="border border-gray-400 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-600 focus-within:border-gray-600">
                                <label htmlFor={"routers"} className="block text-xs font-medium text-gray-900">
                                    Routers
                                </label>
                                <input
                                type={"number"}
                                name={"routers"}
                                key={"routers"}
                                value={client.routers}
                                onChange={
                                    (e: any) => {
                                        setClient({ ...client, "routers": e.target.value });
                                    }
                                }
                                className="block w-full bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                                placeholder={'1...'}
                                />
                            </div>
                        </div>

                        <div className="my-3">
                            <div className="border border-gray-400 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-600 focus-within:border-gray-600">
                                <label htmlFor={"locations"} className="block text-xs font-medium text-gray-900">
                                    Locations
                                </label>
                                <input
                                type={"text"}
                                name={"locations"}
                                key={"locations"}
                                value={client.locations}
                                onChange={
                                    (e: any) => {
                                        setClient({ ...client, "locations": e.target.value.split(",") });
                                    }
                                }
                                className="block w-full bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                                placeholder={'lacation1, location2, location3...'}
                                />
                            </div>
                            <p className="font-normal text-gray-400 text-sm px-2">
                                Separete each location with a space
                            </p>
                        </div>

                        <div>
                            {
                                client.name.length > 2 && client.locations && client.routers.length > 0
                                    ?
                                        <button className="rounded-md p-3 w-full bg-gray-600 text-gray-50" onClick={()=>{ 
                                            createNew() 
                                            alert("created")
                                        }}>
                                            Save
                                        </button>
                                    :
                                        <button className="cursor-not-allowed rounded-md p-3 w-full bg-gray-200 text-gray-500">
                                            Fill the fields
                                        </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateClient