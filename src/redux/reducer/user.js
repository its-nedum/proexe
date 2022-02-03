import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  user: {},
}

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      getUsers: (state, action) => {

      },
      getUser: (state, action) => {

      },
      addUser: (state, action) => {
    
      },
      updateUser: (state, action) => {
        
      },
      deleteUser: (state, action) => {
        
      },
    },
  })