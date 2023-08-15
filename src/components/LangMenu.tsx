import Flag from './Flag';

const LangMenu = ({openPopup} : {openPopup : boolean}) => {

    const emptyStyle = {};
    const hiddenStyle = { display: 'none' };

    return (
        <div className="lang__picker" style={openPopup ? emptyStyle : hiddenStyle}>
            <div className='lang__option'>
                <Flag currentLang='de' />
                <p>German</p>
            </div>
            <div className='lang__option'>
                <Flag currentLang='en' />
                <p>English</p>
            </div>
            <div className='lang__option'>
                <Flag currentLang='pl' />
                <p>Polish</p>
            </div>
        </div>
    )
}

export default LangMenu