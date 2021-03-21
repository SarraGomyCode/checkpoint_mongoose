import { TOGGEL_ADD, TOGGEL_EDIT } from "../actionTypes/edit";

const initialeState = {
  edit: false,
};

const EditReducer = (state = initialeState, { type }) => {
  switch (type) {
    case TOGGEL_ADD:
      return { ...state, edit: false };
    case TOGGEL_EDIT:
      return { ...state, edit: true };

    default:
      return state;
  }
};

export default EditReducer;
