import {
  GET_CONTACTS,
  LOAD_CONTACT,
  FAIL_CONTACT,
} from "../actionTypes/contact";

const intialState = {
  contactList: [],
  laodContact: false,
  errors: null,
  contact: {},
};

const contactReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, laodContact: true };
    case GET_CONTACTS:
      return { ...state, contactList: payload.contacts, laodContact: false };
    case FAIL_CONTACT:
      return { ...state, errors: payload, laodContact: false };
    case GET_CONTACT:
      return { ...state, contact: payload };

    default:
      return state;
  }
};

export default contactReducers;
