import LangMenu from "./LangMenu";

interface PickDataMenuProps {
    updateDataset: (dataset:string) => void;
    openPopup: boolean;
}

const PickDataMenu:React.FC<PickDataMenuProps> = ({updateDataset, openPopup}) => {

    const emptyStyle = {};
    const openStyle = { height: '100%' };

    const handleUpdateDataSet = () => {
        updateDataset('test');
    }

  return (
    <div className='pick__data__menu' style={openPopup ? openStyle : emptyStyle}>
        <div className="content">
            <h2>Welcome to Interactive Swiss Data Viewer!</h2>
            <h4>Choose dataset to Explore:</h4>
            <LangMenu openPopup={openPopup} />
        </div>
    </div>
  )
}

export default PickDataMenu