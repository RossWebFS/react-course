import { useSelector } from "react-redux";

export const Customer = () => {
  const { fullName } = useSelector((store) => store.customer);

  return <h2>👋 Welcome, {fullName}</h2>;
};
