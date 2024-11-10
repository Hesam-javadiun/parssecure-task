import { createContext } from "react";
import type { StateType } from "./data-provider";


export const DataContext = createContext<StateType | null>(null);
