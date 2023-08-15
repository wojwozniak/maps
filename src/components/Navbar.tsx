import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

interface NavbarProps {
  onMenuClick: () => void;
  openPopup: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, openPopup }) => {
  return (
    <div
      style={{
        backgroundColor: openPopup ? '#8d818c' : '#b4b8c5',
        transition: 'all 0.5s ease-in-out',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        zIndex: 100,
      }}
    >
        <div style={{ fontWeight: 'bold' }}>
            {!openPopup ? <h2 style={{color: 'white'}}>Swiss Data Viewer</h2> : <></>}
        </div>
          <button
          style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
          }}
          onClick={onMenuClick}
          >
              {openPopup 
              ? <AiOutlineClose size={30} />
              : <AiOutlineMenu size={30} /> }
          </button>
    </div>
  );
};

export default Navbar;