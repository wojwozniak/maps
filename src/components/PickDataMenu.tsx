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
            <h2 id="title">Interactive D3.js Maps</h2>
            <h4 id="subtitle">This website contains series of interactive maps with data about Switzerland</h4>
            <p>Website created with d3.js, react and statistical data from x</p>
            <div>
                <p>Select dataset from list</p>
                <ol>
                    <li>aaa</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default PickDataMenu