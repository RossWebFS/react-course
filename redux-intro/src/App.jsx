import { CreateCustomer } from "./features/customer/CreateCustomer";
import { Customer } from "./features/customer/Customer";
import { AccountOperations } from "./features/account/AccountOperations";
import { BalanceDisplay } from "./features/account/BalanceDisplay";
import { useSelector } from "react-redux";

const App = () => {
  const customer = useSelector((state) => state.customer);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer.fullName ? (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      ) : (
        <CreateCustomer />
      )}
    </div>
  );
};

export default App;
