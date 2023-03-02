import React from 'react';

const CardPlat = ({mealData}) => {
    return (
        <div className="cardPlat">
            <h3>{mealData.strMeal}</h3>
            <span>Origin: {mealData.strArea}</span>
            <img src={mealData.strMealThumb} alt="photoPlat"/>
            <p>{mealData.strInstructions}</p>
        </div>
    );
};

export default CardPlat;