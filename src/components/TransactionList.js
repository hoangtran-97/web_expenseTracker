import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div style={styles.container}>
            <h3>History</h3>
            <ul style={styles.list}>
                {transactions.map((transaction) => (
                    <Transaction transaction={transaction} key={transaction.id} />
                ))}

            </ul>
        </div>
    );
};
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
        width: "70vw",
    },
    list: {
        listStyle: "none"
    }
};
