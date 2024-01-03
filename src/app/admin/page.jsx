'use client'
import { useState } from "react"
import { login } from "../firebase/auth"
import DarkModeSwitch from "../components/DarkModeSwitch"
import { useAuth } from "../features/store/auth-store"
import { useRouter } from "next/navigation"



export default function Admin() {
    const router = useRouter()

    const { setLoggin } = useAuth()
    const [error, setError] = useState()
    const [darkMode, setDarkMode] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await login({
                email: event.target[0].value,
                password: event.target[1].value
            })
            console.log(res)
            await setLoggin()

        } catch (err) {
            setError({ status: true, message: err.code })
            console.log(err.code)
        } finally {

        }

        setError({ status: false, message: "" })
    }

    const HandleDarkMode = () => setDarkMode(!darkMode)


    return (
        <div className={`${darkMode && "dark"} dark:bg-customBlack bg-customWhite  min-h-screen w-full flex flex-col items-center justify-center`}>
            <div className="text-customBlack duration-500 dark:text-customWhite dark:bg-customBlack bg-customWhite  min-h-screen w-full flex flex-col items-center justify-center">
                <DarkModeSwitch HandleDarkMode={HandleDarkMode} darkMode={darkMode} />
                <h5 className="text-5xl text mb-8">Login</h5>

                <form onSubmit={handleSubmit} action="" method="get" className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row  sm:items-center justify-between form-example">
                        <label className="me-2" htmlFor="email">Email: </label>
                        <input className="text-black rounded-full" type="email" name="email" id="email" placeholder="email@email.com" required />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between form-example">
                        <label className="me-2" htmlFor="password"> Password: </label>
                        <input className="text-black rounded-full" type="password" name="password" id="password" placeholder="********" required />
                    </div>
                    <button type="submit" className="border-2 border-customBlack mx-auto dark:border-customWhite px-4 py-2 rounded-lg hover:text-customWhite hover:bg-slate-900 duration-150 ">Go</button>
                </form>
            </div>
        </div>

    )
}