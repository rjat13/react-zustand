import React, { useEffect, useState } from 'react'
import { useCatStore } from './store/catStore'

export default function EditCategory({catIdex, setEditCat}:any) {
    const {updateCate, cate }:any = useCatStore();
    const [val , setVal] = useState(cate[catIdex])

    const handleEditCate = () => {
        const eCate = [...cate];
        eCate[catIdex] = val
        // console.log("update ", val)
        updateCate(eCate);
        setEditCat(-1)
        
    }

    return (
        <><div className='add-cate'>
                <label>Edit Category</label>
                <input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <button className='btn' onClick={handleEditCate}>Update</button>
                    <button className='btn' onClick={() => setEditCat('')} style={{marginLeft:10}}>Cancel</button>
                </div>
            </div>
            <hr/>
        </>
    )
}
