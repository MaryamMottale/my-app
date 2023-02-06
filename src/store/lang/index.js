const CHANGE_LANG = "CHANGE_LANG";

export const langReducer = (state = "en", action) => {
  if (action.type === CHANGE_LANG) {
    return action.lang;
  }
  return state;
};

export const changeLangAction = (lang) => ({
  type: CHANGE_LANG,
  lang: lang,
});
