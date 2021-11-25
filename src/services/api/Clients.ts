import { collection, getDocs, onSnapshot } from "@firebase/firestore"
import { db } from "./fireBase"

const clientsColectionRef = collection(db, "clients")

export const getClients = async ()=>{

    //const data  = await getDocs(clientsColectionRef)
    const clientsColectionRef = collection(db, "clients")
    const getData = await onSnapshot(clientsColectionRef, async (res)=>{
    })

    return getData

}