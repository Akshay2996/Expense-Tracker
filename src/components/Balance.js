import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transaction) => {
		return transaction.amount;
	});

	const total = amounts
		.reduce((acc, current) => (acc += current), 0)
		.toFixed(2);

	return (
		<>
			<h4 style={{ textAlign: "center" }}>Your Balance</h4>
			<h1 style={{ textAlign: "center" }}>₹{total}</h1>
		</>
	);
};

export default Balance;
