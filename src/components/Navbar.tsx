import { AiOutlineMenu } from 'react-icons/ai';
import LangMenu from './LangMenu';

interface NavbarProps {
  onMenuClick: () => void;
  openPopup: boolean;
  getUpdatedLang: (s: string) => void;
  label: string;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, openPopup, getUpdatedLang, label }) => {
  return (
    <div
      style={{ backgroundColor: openPopup ? '#FFFFFF' : '#D52B1E' }}
      className='navbar'
    >
      <div style={{ fontWeight: 'bold' }}>
      <h2 style={{ color: 'white' }}> {openPopup ? "Interactive Swiss Maps" : label}</h2>
      </div>
      <LangMenu openPopup={openPopup} getUpdatedLang={getUpdatedLang} />
      {openPopup
        ? <></>
        : <button
          className='menu__button'
          onClick={onMenuClick}
        >
          <AiOutlineMenu size={30} />
        </button>
      }
    </div>
  );
};

export default Navbar;