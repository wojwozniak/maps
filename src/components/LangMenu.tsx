import { useTranslation } from 'react-i18next';
import Flag from './Flag';
import { useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

interface LangMenuProps {
    openPopup: boolean;
    getUpdatedLang: (s: string) => void;
}

const LangMenu:React.FC<LangMenuProps> = ({openPopup, getUpdatedLang}) => {
    const { i18n } = useTranslation();
    const [openLangMenu, setOpenLangMenu] = useState(false);
    const currentLang = i18n.language;

    const [lang, setLang] = useState(currentLang);

    useEffect(() => {
        i18n.changeLanguage(lang);
        getUpdatedLang(lang);
    }, [lang]);

    const emptyStyle = {};
    const activeStyle = {
        borderRadius: "0px 0px 0px 0px",
        overflow: "visible",
    };
    const activeClosedMenuStyle = {
        borderRadius: "10px 0px 10px 10px",
        height: "102px"
    }
    const showStyle = {
        height: "102px"
    }
    

    return (
        <div 
            className='nav__lang' 
            onClick={() => setOpenLangMenu(!openLangMenu)}
            style={openLangMenu ? activeStyle : emptyStyle}>

            <Flag currentLang={currentLang} />
            
            <ul 
                className="nav__lang__menu" 
                style={openLangMenu ? (openPopup ?activeClosedMenuStyle : showStyle ) : emptyStyle}>

                <li 
                    className='nav__lang__menu__items' 
                    onClick={() => setLang('en')}>

                    English
                </li>
                <li 
                    className='nav__lang__menu__items'
                    onClick={() => setLang('pl')}>

                    Polski
                </li>
                <li 
                    className='nav__lang__menu__items'
                    onClick={() => setLang('de')}>

                    Deutsch
                </li>
            </ul>

            {openLangMenu
                ? <AiOutlineDown size="12px" className='nav__chevron' />
                : <AiOutlineUp size="12px" className='nav__chevron' />}
        </div>
    )
}

export default LangMenu