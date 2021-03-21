import { TOGGEL_ADD, TOGGEL_EDIT } from "../actionTypes/edit";

export const toggleEdit = () => {
  return {
    type: TOGGEL_EDIT,
  };
};

export const toggleAdd = () => {
  return {
    type: TOGGEL_ADD,
  };
};
