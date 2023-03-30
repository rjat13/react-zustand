import React, { useEffect, useState } from 'react';
import { useCatStore } from './store/catStore';
import './App.css';
import AddCategory from './AddCategory';
import {FaPen, FaTrash} from 'react-icons/fa'
import EditCategory from './EditCategory';


function App() {
  const [editCat, setEditCat] = useState({});
  const { cate,  deleteCate, getCateApi }: any = useCatStore()
  
  useEffect(()=> {
    getCateApi()
  },[])

  const CatList = cate && cate.map((itm:any) => <li key={itm.id}>{itm.title}
                    <div>
                      <button className='btn-icon' onClick={() => deleteCate(itm.id)}><FaTrash /></button>
                      <button className='btn-icon' onClick={() => setEditCat(itm)}><FaPen /></button>
                    </div>
                </li>) 

  return (
    <div className="App">
      <h4>Zustand!</h4>
      <AddCategory />
      { Object.keys(editCat).length > 0 && <EditCategory catIdex={editCat} setEditCat={setEditCat} /> }
      <ul>
        {CatList}
      </ul>
    </div>
  );
}

export default App;
