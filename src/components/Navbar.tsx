import { AiOutlineMenu } from 'react-icons/ai';

interface NavbarProps {
  onMenuClick: () => void;
  openPopup: boolean;
  label: string;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, openPopup, label }) => {
  return (
    <div
      style={{ backgroundColor: openPopup ? '#FFFFFF' : '#D52B1E' }}
      className='navbar'
    >
      <h2 className='nav__title'>
        {openPopup ? "" : label}
      </h2>
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