import React, { useEffect, useState } from 'react'
import { useCatStore } from './store/catStore'

export default function EditCategory({catIdex, setEditCat}:any) {
    const {updateCate, cate }:any = useCatStore();
    const [val , setVal] = useState(catIdex)

    const handleEditCate = () => {
        updateCate(val);
        setEditCat(0)
        
    }

    return (
        <><div className='add-cate'>
                <label>Edit Category</label>
                <input type='text' value={val.title} onChange={(e) => setVal({...val, title: e.target.value})} />
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <button className='btn' onClick={handleEditCate}>Update</button>
                    <button className='btn' onClick={() => setEditCat('')} style={{marginLeft:10}}>Cancel</button>
                </div>
            </div>
            <hr/>
        </>
    )
}
