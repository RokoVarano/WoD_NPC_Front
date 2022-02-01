
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import User from '../object-classes/User'

export const loginUser = createAsyncThunk(
    'user/login',
    async ({username, password}: any) => {
      const response = await User.login(username, password)
        .then(response => {
          console.log('RESPONSE', response)
          return {
          id: response.data["id"], username: response.data["username"], token: response.data["access_token"]
          }
        }
      ).catch(error => console.log(error))
      return response
    }
  )

// Define a type for the slice state
interface UserState {
  user: {id: number, username: string, token: string},
}

// Define the initial state using that type
const initialState: UserState = {
  user: {id: 0, username: '', token: ''}
}

export default createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state: { user: any }, {payload}: any) => {
      state.user = payload
    }),
    builder.addCase(loginUser.rejected, (state, action) => {
      state.user = initialState.user
    })
  },
})

//TODO: ver tutorial de como usar redux thunk en con toolkit
