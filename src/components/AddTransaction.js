import React, { useState } from "react";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    return (
        <>
            <h3>Add new transaction</h3>
            <form>

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
                <button type="button">Add transaction</button>
            </form>
        </>
    );
};
