import { NoteProps } from "@/interfaces/noteProps";
import { createContext, Dispatch, SetStateAction } from "react";


interface ContextProps {
    notes: NoteProps[],
    setNotes: Dispatch<React.SetStateAction<NoteProps[]>>
}
export const AppContext = createContext<ContextProps>({
    notes: [],
    setNotes: (action: NoteProps[] | ((prevState: NoteProps[]) => NoteProps[])) => []
})
