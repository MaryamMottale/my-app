// import { useEffect, useState, React } from "react";
// import Post from "./post.jsx";
// import axios from "axios";

import { useContext } from "react";
import { storeContext } from "../store";
import { toggleThemeAction } from "../store/isDark";

// const Homepage = () => {
//   const [data, SetData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         SetData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <>
//       <Post post={data} />
//     </>
//   );
// };
// export default Homepage;

const Homepage = () => {
  const store = useContext(storeContext);
  return (
    <div>
      <button
        onClick={() => {
          store.dispatch(toggleThemeAction());
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};
export default Homepage;
