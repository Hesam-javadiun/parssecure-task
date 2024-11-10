import { createContext } from "react";
import type { StateType } from "./data-context-provider";


export const DataContext = createContext<StateType | null>(null);
