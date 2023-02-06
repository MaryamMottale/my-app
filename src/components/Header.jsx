import { useContext } from "react";
import { storeContext } from "../store";
import { changeThemeAction } from "../store/isDark";
import { changeLangAction } from "../store/lang";

const Header = () => {
  const store = useContext(storeContext);

  // get value
  // const isDark = store.getState();
  const { isDark, lang } = store.getState();

  const handleThemeChange = (e) => {
    console.log(e.target.value);
    store.dispatch(changeThemeAction(e.target.value));
  };

  const btnThemeChange = () => {
    store.dispatch(changeThemeAction(isDark ? "light" : "dark"));
    // store.dispatch({
    //   type: CHANGE_THEME,
    //   themeName: isDark ? "light" : "dark",
    // });
  };

  const handleLangChange = (e) => {
    store.dispatch(changeLangAction(e.target.value));
  };

  return (
    <div>
      <select value={isDark ? "dark" : "light"} onChange={handleThemeChange}>
        <option selected disabled value="choose">
          choose...
        </option>
        <option value="dark">dark</option>
        <option value="light">light</option>
      </select>

      <span>{isDark ? "dark" : "light"}</span>

      <div>
        <button onClick={btnThemeChange}>change theme</button>
      </div>

      <select value={lang} onChange={handleLangChange}>
        <option selected disabled value="choose">
          choose...
        </option>
        <option value="en">english</option>
        <option value="fa">farsi</option>
      </select>
    </div>
  );
};
export default Header;
