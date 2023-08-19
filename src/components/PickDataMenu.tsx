import { Dataset, DatasetList } from '../datasets';
import Description from './Description';
import Footer from './Footer';

interface PickDataMenuProps {
    updateDataset: (dataset: Dataset) => void;
    openPopup: boolean;
}

const PickDataMenu: React.FC<PickDataMenuProps> = ({ updateDataset, openPopup }) => {

    const emptyStyle = {};
    const openStyle = { height: '100%' };

    const handleUpdateDataSet = (e: any, i: number) => {
        e.preventDefault();
        updateDataset(DatasetList[i]);
    }

    return (
        <>
            <div className='pick__data__menu' style={openPopup ? openStyle : emptyStyle}>
                <div className="content">
                    <h2 id="title">Interactive D3.js Maps</h2>
                    <Description />
                    <div style={{textAlign: "center"}}>
                        <p>Select dataset from list</p>
                        <ol className='dataset__picker'>
                            {DatasetList.map(
                                (dataset, i) => {
                                    return (
                                        <li className='dataset'
                                            key={i}
                                            onClick={(e) => handleUpdateDataSet(e, i)}>
                                            {dataset.labelEN}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
            {openPopup &&
                <div style={{
                    position: 'absolute',
                    zIndex: 100,
                    width: "90%",
                    bottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Footer />
                </div>
            }
        </>
    )
}

export default PickDataMenu