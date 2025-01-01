import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import exp from "constants"

const initialState: boolean = false

export const LoadingSlice = createSlice({
    name: "loadingSlice",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            return action.payload
        }
    }
})

export const {setLoading} = LoadingSlice.actions;
export default LoadingSlice.reducer;