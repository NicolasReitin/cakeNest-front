import { createContext, useContext } from "react";

export const OrderPageContext = createContext("");

const useOrderPage = () => useContext(OrderPageContext);