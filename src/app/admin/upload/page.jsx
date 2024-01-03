'use client'
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/features/store/auth-store"


export default function Upload() {

    const router = useRouter()
    const { loggin } = useAuth()

    // if (!loggin) router.push("/admin")

    return (
        <div className="bg-customBlack w-full min-h-screen flex flex-col items-center justify-center">
            <h5>Upload</h5>

        </div>
    )
}