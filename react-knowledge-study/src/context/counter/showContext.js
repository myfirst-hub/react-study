import { createContext } from "react";

// context传参
const { Provider, Consumer } = createContext({ show: "context" });

export { Provider, Consumer };
