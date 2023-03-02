import React, {useEffect, useState} from 'react';
import CardPlat from "../components/CardPlat";
import axios from "axios";

const Home = () => {
    const [mealData, setMealData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if(search === ""){
            axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=A").then(res => setMealData(res.data.meals))
        }
        else{
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res => setMealData(res.data.meals))
        }
    }, [search]);


    return (
        <div className="containerHome">
            <div className="headerPage">
                <div className="border-title">
                    <h1>REACT FOOD</h1>
                </div>
                <input type="text" placeholder="Taper le nom d'un aliment (en anglais)" onChange={((e) => setSearch(e.target.value))}/>
            </div>
            <div className="plat">
                {
                    mealData !== null ?
                        mealData.map((value, index) => <CardPlat key={index} mealData={value}/>)
                        :
                        ""
                }
            </div>
        </div>
    );
};

export default Home;