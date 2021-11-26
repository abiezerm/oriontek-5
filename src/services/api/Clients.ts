import { addDoc, collection, getDocs } from "@firebase/firestore"
import { db } from "./fireBase"

const clientsColectionRef = collection(db, "clients")

export const getClients = async ()=>{
    let data  = (await getDocs(clientsColectionRef)).docs
    return data
}

export const postClient = async (client: any) => await addDoc(clientsColectionRef, client)
