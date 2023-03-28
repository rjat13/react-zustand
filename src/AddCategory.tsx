import React, { useState } from 'react'
import { useCatStore } from './store/catStore'


export default function AddCategory() {
    const [frm, setFrm] = useState(false)
    const [val, setVal] = useState('');
    const {addCate}:any = useCatStore()

    const handleAddCategory = () => {
        addCate(val)
        setVal('')
    }


    return (
        <div>
            <button onClick={() => setFrm(!frm)}>Add Category</button>
            <hr/>
            {frm && 
                <><div className='add-cate'>
                    <label>Add Category</label>
                    <input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
                    <button className='btn' onClick={handleAddCategory}>Save</button>
                </div>
                <hr/></>
            }
        </div>
    )
}
