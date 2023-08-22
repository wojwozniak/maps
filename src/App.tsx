import { useState, useEffect } from 'react';
import Map from './components/Map'
import Navbar from './components/Navbar'
import './index.css'
import Footer from './components/Footer';
import { Dataset, DatasetList } from './datasets';
import PickDataMenu from './components/PickDataMenu';



const App = () => {
  const [openPopup, setOpenPopup] = useState(true);
  const [dataset, setDataset] = useState<Dataset>(DatasetList[0]);
  const updateDataset = (dataset: Dataset) => {
    setDataset(dataset);
    setOpenPopup(false);
  }

  const toggleMenu = () => {
    setOpenPopup(!openPopup);
  }

  useEffect(() => {
    setLabel(dataset.label);
  }, [dataset]);

  const [label, setLabel] = useState(dataset.label);

  return (
    <div className='App'>
        <Navbar label={label} onMenuClick={toggleMenu} openPopup={openPopup} />
        <PickDataMenu updateDataset={updateDataset} openPopup={openPopup} />
        <div className='map__container'>
          { !openPopup && <Map link={dataset.link} map={dataset.map} /> }
        </div>
        { !openPopup && <p>{dataset.desc}</p>}
        <Footer />
    </div>
  )
}

export default App
