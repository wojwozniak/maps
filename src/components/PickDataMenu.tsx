import { Dataset, DatasetList } from '../datasets';

interface PickDataMenuProps {
    updateDataset: (dataset: Dataset) => void;
    openPopup: boolean;
}

const PickDataMenu: React.FC<PickDataMenuProps> = ({ updateDataset, openPopup }) => {

    const emptyStyle = {};
    const openStyle = { height: '100%', minHeight: '85vh' };

    const handleUpdateDataSet = (e: any, i: number) => {
        e.preventDefault();
        updateDataset(DatasetList[i]);
    }

    return (
        <>
            <div className='pick__data__menu' style={openPopup ? openStyle : emptyStyle}>
                <div className="content">
                    <h2 id="title">Interactive D3.js Maps</h2>
                    <div style={{ marginBottom: "20px" }}>
                        <h4 id="subtitle">Exploring Switzerland through Data: A D3.js adventure</h4>
                        <p className="desc__text">
                            Are you ready to embark on a captivating journey through Switzerland like never before? Welcome to our immersive web experience that combines the power of D3.js, React, and rich statistical data to bring the beauty and complexity of Switzerland to your fingertips.
                        </p>
                        <p className="desc__text">
                            Website created with D3.js and React
                        </p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p>Select dataset from list</p>
                        <ol className='dataset__picker'>
                            {DatasetList.map(
                                (dataset, i) => {
                                    return (
                                        <li className='dataset'
                                            key={i}
                                            onClick={(e) => handleUpdateDataSet(e, i)}>
                                            {dataset.label}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PickDataMenu