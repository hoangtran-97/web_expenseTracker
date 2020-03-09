import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState();
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: uuidv4(),
            text,
            amount: +amount
        };

        addTransaction(newTransaction);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} style={styles.form}>

                <label htmlFor="inputText" style={styles.label}>
                    Text
                    <br />
                    <input
                        type="text"
                        placeholder="Enter text..."
                        id="inputText"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
                <label htmlFor="inputAmount" style={styles.label}>
                    Amount
                    (- expense, + income)
                    <br />
                    <input
                        type="text"
                        placeholder="Enter amount..."
                        id="inputAmount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <button type="submit" style={styles.button}>Add transaction</button>
            </form>
        </>
    );
};
const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "150px",
        backgroundColor: "#424242",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
    },
    label: {
        marginBottom: "10px"
    },
    button: {
        backgroundColor: "white",
        padding: "5px",
        borderRadius: "10px"
    }
};
