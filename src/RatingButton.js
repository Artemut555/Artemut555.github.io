import * as React from 'react';
import styles from "./RatingButton.module.css";

export const RatingButton = ({rateChange}) => {
    console.log(styles)
    return (
        <div onChange={(event => rateChange(event))} className={`${styles.componentRatingButton}`}>
            <form className={styles.ratingForm}>
                <h1>Фильтры</h1>
                {["Без оценки", 1, 2, 3, 4, 5].map(value => {
                    const num = value === "Без оценки" ? 0 : value;
                    return <div className={styles.ratingRadio} key={num}>
                        <input type="radio" value={num} name="rating"/> <label>{value}</label>
                    </div>
                })}
            </form>
        </div>
    );

}