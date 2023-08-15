import { US, PL, DE } from 'country-flag-icons/react/3x2'

type FlagMapType = {
    [key: string]: React.ReactElement;
};

const Flag = ({ currentLang }: { currentLang: string }) => {
    const flagStyle = {
        height: '20px',
        width: '30px',
        border: '1px solid black',
    }

    const flagMap: FlagMapType = {
        en: <US title="United States of America" style={flagStyle} />,
        pl: <PL title="Poland" style={flagStyle} />,
        de: <DE title="Germany" style={flagStyle} />
    };

    const flagToRender = flagMap[currentLang] || null;
    return flagToRender;
};

export default Flag