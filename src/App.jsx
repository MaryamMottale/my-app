import Header from "./components/Header";
import Homepage from "./components/Homepage";
import StoreProvider from "./store";

// const initialData = {
//   lang:'en',
//   isDark: false
// }

// const initialData = false;

//pure function

//Reducers

// create store
// const store = createStore(isDarkReducer);
//create store

// console.log(store);
// console.log(store.getState());

//changeThemeAction
//toggleThemeAction
//changeLangAction

const App = () => {
  //useState and useEffect

  return (
    <StoreProvider>
      <div>
        <Header />
        <Homepage />
      </div>
    </StoreProvider>
  );
};
export default App;
