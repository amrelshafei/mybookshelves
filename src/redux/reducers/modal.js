const initialState = {
  show: false,
  mode: "add",
  form: {
    id: "",
    value: {
      title: "",
      category: "",
      description: "",
      price: "",
      media: "",
    },
  },
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_MODAL": {
      return { ...state, show: true };
    }
    case "HIDE_MODAL": {
      return { ...state, show: false };
    }
    case "TOGGLE_MODAL": {
      return { ...state, show: !state.show };
    }
    case "SET_MODAL_MODE": {
      const mode = action.payload;
      return { ...state, mode: mode };
    }
    case "SET_MODAL_FORM_ID": {
      const id = action.payload;
      return { ...state, form: { ...state.form, id: id } };
    }
    case "EDIT_MODAL_FORM_VALUE": {
      const value = action.payload;
      return {
        ...state,
        form: { ...state.form, value: { ...state.form.value, ...value } },
      };
    }
    case "CLEAR_MODAL_FORM": {
      return { ...state, form: initialState.form };
    }
    default:
      return state;
  }
}
