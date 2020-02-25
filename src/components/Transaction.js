import React from "react";

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? "-" : "+";
    return (
        <li style={transaction.amount < 0 ? styles.minus : styles.plus}>
            {transaction.text}
            <span>{sign}{Math.abs(transaction.amount)}$</span>
            <button type="button">X</button>
        </li>
    );
};
const styles = {
    minus: {
        backgroundColor: "red"
    },
    plus: {
        backgroundColor: "green"
    }
};
