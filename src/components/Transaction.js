import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? "-" : "+";
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li style={transaction.amount < 0 ? styles.minus : styles.plus}>
            {transaction.text}
            <span>{sign}{Math.abs(transaction.amount)}$</span>
            <button type="button" onClick={() => deleteTransaction(transaction.id)}>X</button>
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
