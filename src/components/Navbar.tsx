import React from 'react';

interface NavbarProps {
  onMenuClick: () => void;
  dataset: string;
  openPopup: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, dataset, openPopup }) => {
  return (
    <div
      style={{
        backgroundColor: openPopup ? '#8d818c' : '#b4b8c5',
        transition: 'all 0.5s ease-in-out',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        zIndex: 100,
      }}
    >
        <div style={{ fontWeight: 'bold' }}>
            <h2>{dataset}</h2>
        </div>
        <div>
            <button
            style={{
                marginRight: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
            }}
            onClick={onMenuClick}
            >
                Burger Menu
            </button>
        </div>
    </div>
  );
};

export default Navbar;