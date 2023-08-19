import { useState, useEffect } from 'react';
import Map from './components/Map'
import Navbar from './components/Navbar'
import './index.css'
import PickDataMenu from './components/PickDataMenu';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider } from 'react-i18next';
import Footer from './components/Footer';
import { Dataset, DatasetList } from './datasets';
import Title from './components/Title';

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
  const [dataset, setDataset] = useState<Dataset>(DatasetList[0]);
  const updateDataset = (dataset: Dataset) => {
    setDataset(dataset);
    setOpenPopup(false);
  }

  const toggleMenu = () => {
    setOpenPopup(!openPopup);
  }

  useEffect(() => {
    setLabel(getLabel());
  }, [dataset]);

  const getLabel = () => {
    switch(i18n.language) {
      case 'en':
        return dataset.labelEN;
      case 'pl':
        return dataset.labelPL;
      case 'de':
        return dataset.labelDE;
      default:
        return dataset.labelEN;
    }
  }

  const [label, setLabel] = useState(getLabel());

  useEffect(() => {
    setLabel(getLabel());
  }, [i18n.language]);

  // @ts-ignore
  const getUpdatedLang = (s:string) => {
    setLabel(getLabel());
  }

  return (
    <div className='App'>
      <I18nextProvider i18n={i18n}>
        <Navbar onMenuClick={toggleMenu} openPopup={openPopup} getUpdatedLang={getUpdatedLang} />
        <PickDataMenu updateDataset={updateDataset} openPopup={openPopup} />
        <Title label={label} />
        { !openPopup && <Map dataset={dataset.name} link={dataset.link} /> }
        <Footer />
      </I18nextProvider>
    </div>
  )
}

export default App
