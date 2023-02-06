const CHANGE_THEME = "CHANGE_THEME";
const TOGGLE_THEME = "TOGGLE_THEME";

export const isDarkReducer = (state = false, action) => {
  console.log({ state, action });

  if (action.type === CHANGE_THEME) {
    // console.log(action.themeName);
    return action.themeName === "dark";
  }

  // if (action.type === CHANGE_THEME) {
  //   return {
  //      ...state,
  //      isDark : action.themeName === "dark"
  //   }
  // }

  if (action.type === TOGGLE_THEME) {
    return !state;
  }
  console.log(state);
  return state;
};

export const changeThemeAction = (themeName) => ({
  type: CHANGE_THEME,
  themeName: themeName,
});

export const toggleThemeAction = () => ({
  type: TOGGLE_THEME,
});
