import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

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
        <>
            <div>
                <h4>Income</h4>
                <p>{income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p>{expense}</p>
            </div>
        </>
    );
};
