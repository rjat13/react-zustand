import {create} from 'zustand'
import { getCat } from '../Api';


export const useCatStore = create( (set) => ({
    cate: [],
    getCateApi: async () => {
        const initState = await getCat()
        // console.log("call api by zustand", initState);
        set((state: any) => {
            return {cate: initState}
        })
    },
    updateCate:(newCate : Array<any>) => set({ cate: newCate }),
    addCate: (newVal:string) => set((state:any) =>{
        return {cate: [...state.cate, newVal]}
    }),
}));
