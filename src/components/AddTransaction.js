import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: uuidv4(),
            text,
            amount: +amount
        };
        console.log(newTransaction);

        addTransaction(newTransaction);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>

                <label htmlFor="inputText">
                    Text
                    <input
                        type="text"
                        placeholder="Enter text..."
                        id="inputText"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
                <label htmlFor="inputAmount">
                    Amount
                    <br />
                    (negative - expense, positive - income)
                    <input
                        type="text"
                        placeholder="Enter amount..."
                        id="inputAmount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <button type="submit">Add transaction</button>
            </form>
        </>
    );
};
