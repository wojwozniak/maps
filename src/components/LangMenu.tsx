import { useTranslation } from 'react-i18next';
import Flag from './Flag';
import { useState } from 'react';

const LangMenu = ({openPopup} : {openPopup : boolean}) => {

    const { i18n } = useTranslation();


    const setCurrentLang = (language: string) => {
        i18n.changeLanguage(language);
        setLang(language);
    };
    const currentLang = i18n.language;

    const [lang, setLang] = useState(currentLang);

    const emptyStyle = {};
    const hiddenStyle = { display: 'none' };
    const selectedLangStyle = { border : '2px solid gold' }
    const notSelectedLangStyle = {border: '2px solid transparent' }

    return (
        <div className="lang__picker" style={openPopup ? emptyStyle : hiddenStyle}>
            <div className='lang__option' 
            style = { lang == 'de' ? selectedLangStyle : notSelectedLangStyle }
            >
                <Flag currentLang='de' />
                <p>German</p>
            </div>
            <div className='lang__option'
            style = { lang == 'en' ? selectedLangStyle : notSelectedLangStyle }
            >
                <Flag currentLang='en' />
                <p>English</p>
            </div>
            <div className='lang__option'
            style = { lang == 'pl' ? selectedLangStyle : notSelectedLangStyle }
            >
                <Flag currentLang='pl' />
                <p>Polish</p>
            </div>
        </div>
    )
}

export default LangMenu