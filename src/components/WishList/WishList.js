import React from 'react';
import './WishList.css';

const WishList = (props) => {
    const {list} = props;
    let total = 0;

    for(const sector of list)
    {
        total = total + sector.estimate_cost
    }

    return (
        <div className="stuck">
            <h4 className="fw-bold">Wish Lists:</h4>
            <div>
                <table className="table text-white">
                    <tbody>
                        <tr className="my-table">
                            <td>Total selected:</td>
                            <td>{list.length}</td>
                        </tr>
                        <tr className="my-table">
                            <td>Total cost:</td>
                            <td>{total}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="list-group">
                {
                    list.map(item=> <ul key={item.id} className="list-group-item list-group-item-action list-group-item-primary">
                        {item.sector_name}
                    </ul>)
                }
                </div>  
            </div>
        </div>
    );
};

export default WishList;