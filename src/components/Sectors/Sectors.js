import React from 'react';
import Rating from 'react-rating';
import './Sectors.css';

const Sectors = (props) => {
    const {sector_name, location, purpuse, importance, estimate_cost, model} = props.sector;

    return (
        <div className="col-md-6 col-lg-4">
            <div className="card-box background">
            <div className="card-thumbnail">
                <img src={model} className="my-img" alt=""/>
            </div>
            <h3 className="mt-2 text-danger">{sector_name}</h3>
            <p className="text-dark">Location: {location}</p>
            <p className="text-dark">{purpuse}</p>
            <p className="text-dark">Priority: <span>
                <Rating initialRating={importance} readonly emptySymbol="far fa-star icon" fullSymbol="fas fa-star icon"></Rating>
            </span>
            </p>
            <p className="text-dark">Estimate cost: {estimate_cost}</p>
            <button type="button" onClick={()=>props.handleAddtoWishList(props.sector)} className="btn my-btn text-white">Add to wishlist</button>
            </div>
        </div>
    );
};

export default Sectors;