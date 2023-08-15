import { useState } from 'react';
import Map from './components/Map'
import Navbar from './components/Navbar'
import './index.css'
import PickDataMenu from './components/PickDataMenu';


const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [dataset, setDataset] = useState('');

  const updateDataset = (dataset:string) => {
    setDataset(dataset);
    setOpenPopup(false);
  }

  const toggleMenu = () => {
    setOpenPopup(!openPopup);
  }

  return (
    <div className='App'>
      <Navbar onMenuClick={toggleMenu} dataset={dataset} openPopup={openPopup} />
      <PickDataMenu updateDataset={updateDataset} openPopup={openPopup} />
      <Map />
    </div>
  )
}

export default App
