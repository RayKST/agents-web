import { Navigate, useParams } from "react-router-dom"

type RoomParms = {
    roomId: string
}

export function Room() {
    const parms = useParams<RoomParms>()
    if (!parms.roomId){
        return <Navigate replace to="/"/>
    }

    return <div>Room Details</div>
}