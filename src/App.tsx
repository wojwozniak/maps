import { useState } from 'react';
import Map from './components/Map'
import Navbar from './components/Navbar'
import './index.css'
import PickDataMenu from './components/PickDataMenu';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider } from 'react-i18next';
import Footer from './components/Footer';

i18n.use(Backend).use(LanguageDetector).init({
  fallbackLng: 'en',
  detection: {
    order: ['localStorage', 'navigator'],
  },
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [dataset, setDataset] = useState('');

  const updateDataset = (dataset: string) => {
    setDataset(dataset);
    setOpenPopup(false);
  }

  const toggleMenu = () => {
    setOpenPopup(!openPopup);
  }

  return (
    <div className='App'>
      <I18nextProvider i18n={i18n}>
        <Navbar onMenuClick={toggleMenu} dataset={dataset} openPopup={openPopup} />
        <PickDataMenu updateDataset={updateDataset} openPopup={openPopup} />
        <Map />
        <Footer />
      </I18nextProvider>
    </div>
  )
}

export default App
