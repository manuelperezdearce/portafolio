import { create } from "zustand";
import { useRouter } from "next/navigation";


export const useAuth = create((set) => ({
    loggin: false,
    setLoggin: () => {
        set((state) => ({ loggin: !loggin }))
    }
}))