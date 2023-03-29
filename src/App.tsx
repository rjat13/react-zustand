import React, { useEffect, useState } from 'react';
import { useCatStore } from './store/catStore';
import './App.css';
import AddCategory from './AddCategory';
import {FaPen, FaTrash} from 'react-icons/fa'
import EditCategory from './EditCategory';


function App() {
  const [editCat, setEditCat] = useState(-1);
  const { cate,  updateCate, getCateApi }: any = useCatStore()
  useEffect(()=> {
    getCateApi()
  },[])

  const handleRemoveCate = (rmItm:string) => {
    const result = cate.filter((itm: string) =>  itm !== rmItm)
    updateCate(result);
  }

  const handleUpdateCate = (editId:string) => {
    setEditCat(cate.indexOf(editId));
  }

  const CatList = cate && cate.map((itm:any) => <li key={itm}>{itm}
                    <div>
                      <button className='btn-icon' onClick={() => handleRemoveCate(itm)}><FaTrash /></button>
                      <button className='btn-icon' onClick={() => handleUpdateCate(itm)}><FaPen /></button>
                    </div>
                </li>) 

  return (
    <div className="App">
      <h4>Zustand!</h4>
      <AddCategory />
      {(editCat >= 0 )&& <EditCategory catIdex={editCat} setEditCat={setEditCat} /> }
      <ul>
        {CatList}
      </ul>
    </div>
  );
}

export default App;
