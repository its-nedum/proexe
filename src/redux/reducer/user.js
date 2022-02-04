import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  user: {},
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      getAPIUsers: (state, action) => {
          // fetch and save users from API
          state.users = action.payload;
      },
      getUser: (state, action) => {
          // set a single user to be displayed on the user edit page
          state.user = action.payload;
      },
      addUser: (state, action) => {
          // add the new user to the end of the users array
          state.users.push(action.payload);
      },
      updateUser: (state, action) => {
          // find the user object from the users array
          const userObj = state.users.find((obj) => obj.id === action.payload.id);
          // update the user details
          userObj.email = action.payload.email;
          userObj.name = action.payload.name
      },
      deleteUser: (state, action) => {
          // filter out the user to be deleted from the users array
          state.users = state.users.filter(user => user.id !== action.payload.id);
      },
      ascendingSort: (state, action) => {
        // sort the users in ascending order by comparing their username
        state.users = state.users.sort((a, b) => a?.username?.toLocaleLowerCase().localeCompare(b?.username?.toLocaleLowerCase()));
      },
      descendingSort: (state, action) => {
        // sort the users in descending order by comparing their username
        state.users = state.users.sort((a, b) => b?.username?.toLocaleLowerCase().localeCompare(a?.username?.toLocaleLowerCase()));
      }
    },
  })

export const { 
  getAPIUsers,
  getUser, 
  addUser, 
  updateUser, 
  deleteUser, 
  ascendingSort, 
  descendingSort,  
} = userSlice.actions;

export default userSlice.reducer;
