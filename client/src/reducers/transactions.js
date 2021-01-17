export default (transactions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "DELETE":
      return transactions.filter((trans) => trans._id !== action.payload);
    case "CREATE":
      return [...transactions, action.payload];
    default:
      return transactions;
  }
};
