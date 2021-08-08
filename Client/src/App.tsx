import { useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory, useLocation } from "react-router-dom";
import { loadPosts } from "./actions/posts";
import { POSTS_LOCALSTORAGE_KEY } from "./constants";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { LoginPage, PostsPage } from "./pages";

const App: React.FC = () => {
  const { posts } = useAppSelector((store) => store);
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadPosts()
      .then(dispatch)
      .catch(() => {});
  }, [dispatch]);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem(POSTS_LOCALSTORAGE_KEY, JSON.stringify(posts));
    }
  }, [posts]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      history.push("/login");
    }
  }, [location.pathname]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/posts">
          <PostsPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
