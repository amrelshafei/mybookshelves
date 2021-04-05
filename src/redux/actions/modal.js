export const showModal = () => ({
  type: "SHOW_MODAL",
});

export const hideModal = () => ({
  type: "HIDE_MODAL",
});

export const toggleModal = () => ({
  type: "TOGGLE_MODAL",
});

export const setModalMode = (mode) => ({
  type: "SET_MODAL_MODE",
  payload: mode,
});

export const setModalFormId = (id) => ({
  type: "SET_MODAL_FORM_ID",
  payload: id,
});

export const editModalFormValue = (value) => ({
  type: "EDIT_MODAL_FORM_VALUE",
  payload: value,
});

export const clearModalForm = () => ({
  type: "CLEAR_MODAL_FORM",
});

export default {
  showModal,
  hideModal,
  toggleModal,
  setModalMode,
  setModalFormId,
  editModalFormValue,
  clearModalForm,
};
