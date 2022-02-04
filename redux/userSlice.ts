
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import User from '../object-classes/User'

export const loginUser = createAsyncThunk(
  'user/login',
  async ({username, password}: any) => await User.login(username, password)
)

export const authUserWithToken = createAsyncThunk(
  'user/auth',
  async (token: string | null) => await User.auth_with_token(token)
)

// Define a type for the slice state
interface UserState {
  user: {id: number, username: string, token: string},
  message: string
}

// Define the initial state using that type
const initialState: UserState = {
  user: {id: -1, username: '', token: ''},
  message: ''
}

export default createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state: { user: {id: number, username: string, token: string}, message: string }, {payload}: any) => {

      state.user = {id: payload.data["id"], username: payload.data["username"], token: payload.data["access_token"]},
      state.message = 'Login succesful'
    }),
    builder.addCase(loginUser.rejected, (state, action) => {

      state.user = initialState.user,
      state.message = action.error.message ? action.error.message : "Something went wrong"
    }),
    builder.addCase(authUserWithToken.fulfilled, (state: { user: {id: number, username: string, token: string | null}, message: string }, {payload}: any) => {
      state.user.id = payload.data["id"]
      state.user.username = payload.data["username"]
      state.user.token = localStorage.getItem("key")
      state.message = 'Login succesful'
    }),
    builder.addCase(authUserWithToken.rejected, (state, action) => {
      state.user = initialState.user,
      state.message = action.error.message ? action.error.message : "Something went wrong"
    })
  },
})

//TODO: ver tutorial de como usar redux thunk en con toolkit
