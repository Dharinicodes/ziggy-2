import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // empty arrary initially
  },
  reducers: {
    addItem: (state, action) => {
      // mutating state - directly modifying state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // length will make the state empty array again
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; // destructuring

export default cartSlice.reducer;

// Things to remember while writing a slice
// createSlice() has object{} inside it
// {object} has 3 things: name, initialStae, reducers
//               1. name - name of the slice
//               2. initialState which again is an object that contains empty array
//               3. reducers which again is an object that contains actions with reducer function
//               4. reducer function binds the state, action and returns by modifying the state
//               5. whatever data(pizza item) you pass in dispatch action will come to payload as an argument which redux takes care of it, that's how it passes data from action to reducer and update/modifes it
//               6. removeItems and clearCart has no action, since you are just removing an already took place action
//               7. In slices, export for actions and reducer are done indivudually
//               8. Store has a sperate reducer for itself which has the responsibility of subscribing to store through selector
//               9. Slice:- inside - reducers, export - reducer {you export it as one single reducer object}
//               10. Slice:- inside - action (one seperate action for each item), export - actions (all 3 item's action combined together as actions)
//               11. Store has inside - reducer, export reducers. Since inside - reducer { has lot of small individual reducer, combines to form reducers}
