import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import commonstyles from "../styles/commonstyles";

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount);
    /* eslint-disable no-param-reassign */
    const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    /* eslint-disable no-param-reassign */
    return (
        <div style={commonstyles.container}>
            <div style={styles.item}>
                <h4>Income</h4>
                <p>{income}</p>
            </div>
            <div style={styles.item}>
                <h4>Expenses</h4>
                <p>{expense}</p>
            </div>
        </div>
    );
};
const styles = {
    item: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "Center",
        alignItems: "center"
    }
};
