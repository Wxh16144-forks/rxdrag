import { IControllerMeta } from "@rxdrag/minions-runtime-react"
import { createContext } from "react"

export const ControllerContext = createContext<IControllerMeta | undefined>(undefined)
export const ControllersContext = createContext<IControllerMeta[]>([])