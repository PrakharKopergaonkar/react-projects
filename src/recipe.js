import React from 'react'
import style from './recipe.module.css'
const Recipe = ({title, calories, image, ingredient}) => {
    return (
        <div className={style.recipe}> 
            <h1> {title} </h1>
            <p> {calories}</p>
            <img src={image} alt="image unavailable"/>
            <ol>
                {ingredient.map(ingredient => (
                    <li> {ingredient.text} </li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe