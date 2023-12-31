"use client"

import { useEffect } from "react"
import { useUser } from "../context/user"
import { useRouter } from "next/navigation"

const withUnprotectedPage = (Component) => {
    return (props) => {
        const router = useRouter()
        const user = useUser()
        const { uid } = user 

    useEffect(() => {
        if (uid) {
            router.replace('/Home')
        }
    }, [uid, router]);

        return <Component {...props}/>
    }
}

export default withUnprotectedPage