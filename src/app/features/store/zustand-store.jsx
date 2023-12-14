import axios from "axios";
import { create } from "zustand";

export const useStore = create((set) => ({
    data: [],
    getData: () => {
        const res = axios.get('../tool/mockData/PortfolioDATA.json')
        set((state) => ({ data: res }))
    }

}))