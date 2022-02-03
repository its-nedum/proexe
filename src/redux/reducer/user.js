import { createSlice } from '@reduxjs/toolkit'
import { UserList } from '../userList';

const initialState = {
  users: UserList,
  user: {},
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      getUser: (state, action) => {
          // set a single user to be displayed on the user edit page
          state.user = action.payload;
      },
      addUser: (state, action) => {
          // add the new user to the end of the users array
          state.users.push(action.payload);
      },
      updateUser: (state, action) => {
          // find the position of the user in the users array
          const position = state.users.findIndex((obj) => obj.id === action.payload.id);
          // replace the user with updated data
          state.users[position] = action.payload
      },
      deleteUser: (state, action) => {
          // filter out the user to be deleted from the users array
          state.users = state.users.filter(user => user.id !== action.payload.id);
      },
    },
  })

export const { getUser, addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;