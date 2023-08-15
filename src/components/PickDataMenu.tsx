interface PickDataMenuProps {
    updateDataset: (dataset:string) => void;
    openPopup: boolean;
}

const PickDataMenu:React.FC<PickDataMenuProps> = ({updateDataset, openPopup}) => {

    const emptyStyle = {};
    const openStyle = { height: '100vh' };

    const handleUpdateDataSet = () => {
        updateDataset('test');
    }

  return (
    <div className='pick__data__menu' style={openPopup ? openStyle : emptyStyle}>
        PickDataMenu
    </div>
  )
}

export default PickDataMenu