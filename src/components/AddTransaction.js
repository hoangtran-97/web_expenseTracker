import React, { ueState } from "react";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    return (
        <>
            <h3>Add new transaction</h3>
            <form>

                <label htmlFor="inputText">
                    Text
                    <input type="text" placeholder="Enter text..." id="inputText" />
                </label>
                <label htmlFor="inputAmount">
                    Amount
                    <br />
                    (negative - expense, positive - income)
                    <input type="text" placeholder="Enter amount..." id="inputAmount" />
                </label>
                <button type="button">Add transaction</button>
            </form>
        </>
    );
};
