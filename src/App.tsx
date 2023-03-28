import React, { useEffect } from 'react';
import { useCatStore } from './store/catStore';
import './App.css';
import { getCat } from './Api';
import AddCategory from './AddCategory';

function App() {

  const { cate,  updateCate }: any = useCatStore()
  useEffect(()=> {
    GetAllCategory();
  },[])

  const GetAllCategory = async () => {
    const initState = await getCat()
    if(initState){ 
      updateCate(initState);
    }
  }

  const handleRemoveCate = (rmItm:string) => {
    const result = cate.filter((itm: string) =>  itm !== rmItm)
    updateCate(result);
  }

  const CatList = cate && cate.map((itm:any) => <li key={itm}>{itm}<div><button onClick={() => handleRemoveCate(itm)}>X</button></div></li>) 

  return (
    <div className="App">
      <h4>Zustand!</h4>
      <AddCategory />
      <ul>
        {CatList}
      </ul>
    </div>
  );
}

export default App;
