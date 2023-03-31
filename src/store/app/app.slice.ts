import {createSlice} from "@reduxjs/toolkit";

export interface IUser{
    name: string
}

export interface AppState {
    user?: IUser
}

const initialState: AppState = {
    user: undefined
}


const appSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {} ,
    extraReducers: {
    }
})
export const {} = appSlice.actions
export default appSlice.reducer