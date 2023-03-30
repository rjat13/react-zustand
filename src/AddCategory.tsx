import React, { useState } from 'react'
import { useCatStore } from './store/catStore'


export default function AddCategory() {
    const [frm, setFrm] = useState(false)
    const [val, setVal] = useState('');
    const {addCate}:any = useCatStore()

    const handleAddCategory = () => {
        if(!val) return;
        addCate(val)
        setVal('')
        closeAddCategory()
    }

    const closeAddCategory = () => {
        setFrm(false);
        setVal('')
    }

    return (
        <div>
            <button onClick={() => setFrm(true)}>Add Category</button>
            <hr/>
            {frm && 
                <><div className='add-cate'>
                    <label>Add Category</label>
                    <input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
                    <div>
                        <button className='btn' onClick={handleAddCategory}>Save</button>
                        <button className='btn' onClick={closeAddCategory} style={{marginLeft:10}}>Cancel</button>
                    </div>
                </div>
                <hr/></>
            }
        </div>
    )
}
