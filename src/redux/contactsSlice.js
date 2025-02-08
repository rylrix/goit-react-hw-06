import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [{ id: 1, name: "i love nig", number: 123 }],
  },
  filters: {
    name: "",
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const contactReducer = contactsSlice.reducer;
export const { deleteContact, addContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.contacts.items;
