import {create} from 'zustand'
import { getCat, addCat, updateCat, deleteCat } from '../Api';

interface updateInterface {id:number, title: string}
export const useCatStore = create( (set) => ({
    cate: [],
    getCateApi: async () => {
        const initState = await getCat()
        set((state: any) => {
            return {cate: initState}
        })
    },
    updateCate:async (newCate : updateInterface) => { 
        const res = await updateCat(newCate)
        return set((state:any) => { 
            const r = state.cate.map((itm:any) => itm.id == res.id ? {...itm, title: res.title} : itm)
            return {cate: r}
        })
    },
    addCate: async (newVal:string) => {
        const res =  await addCat(newVal)
        set((state:any) =>{
            return {cate: [...state.cate, res]}
        })
    },
    deleteCate: async (id:number) => {
        const res = await deleteCat(id)
        return set((state:any) => {
            const r =  state.cate.filter((itm:any) => itm.id !== id)
            return {cate: r}
        })
    }
}));
