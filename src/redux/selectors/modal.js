export const modalShow = ({ modal }) => modal.show;

export const modalMode = ({ modal }) => modal.mode;

export const modalFormId = ({ modal }) => modal.form.id;

export const modalFormValue = ({ modal }) => modal.form.value;

export default {
  modalShow,
  modalMode,
  modalFormId,
  modalFormValue,
};
