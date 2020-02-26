import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? "-" : "+";
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <div style={styles.container} className="transaction">
            <li style={transaction.amount < 0 ? styles.minus : styles.plus}>
                {transaction.text}
                <span>{sign}{Math.abs(transaction.amount)}$</span>

            </li>
            <button
                type="button"
                onClick={() => deleteTransaction(transaction.id)}
                style={styles.button}
            >X
            </button>
        </div>
    );
};
const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
    },
    minus: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "10px",
        width: "40vw",
        backgroundColor: "#fe879a"
    },
    plus: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "10px",
        width: "40vw",
        backgroundColor: "#4cd964",
    },
    button: {
        backgroundColor: "black",
        color: "red",
        width: "40px",
        height: "40px",
        borderColor: "black",
    }
};
