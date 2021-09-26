import React, { useEffect, useState } from 'react';
import Sectors from '../Sectors/Sectors';
import WishList from '../WishList/WishList';
import './Budget.css'

const Budget = () => {
    //state
    const [displaySectors, setDisplaySectors] = useState([]);
    const [budgetLeft, setBudgetLeft] = useState(1000000000);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('./DATA.JSON')
        .then(res => res.json())
        .then(data => setDisplaySectors(data));
    },[])

    const handleAddtoWishList = sector => {
        const newList = [...list, sector];
        let cost = sector.estimate_cost;
        
        if(budgetLeft>0)
        {
            setBudgetLeft(budgetLeft - cost);
            
        }else{
            setBudgetLeft('Budget exceeded!');
        }
        setList(newList);
    }

    return (
        <div className="text-white">
            <div className="sticky-top my-bg">
                <h1 className="fw-bold">Build your own city</h1>
                <h4>Total budget: 100 Crore - Budget left: <span className="text-warning">{budgetLeft}</span></h4>
                <hr className="mx-5"/>
            </div>

            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-9">
                        <div className="container">
                            <div className="row">
                                {
                                    displaySectors.map(sector => <Sectors key={sector.id}
                                    sector={sector}
                                    handleAddtoWishList = {handleAddtoWishList}>
                                    </Sectors>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <WishList list={list}></WishList>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Budget;