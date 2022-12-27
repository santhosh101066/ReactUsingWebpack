const initial = { list: [] };

export default function ClickOn(state = initial, action) {
  switch (action.type) {
    case "list/Add":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "list/Remove":
      return {
        ...state,
        list: state.list.filter((val, i) =>
          i === action.payload ? null : val
        ),
      };
    default:
      return state;
  }
}
