import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadPosts } from "./actions/posts";
import { POSTS_LOCALSTORAGE_KEY } from "./constants";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { LoginPage, PostsPage } from "./pages";

const App: React.FC = () => {
  const { posts } = useAppSelector((store) => store);
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem(POSTS_LOCALSTORAGE_KEY, JSON.stringify(posts));
    }
  }, [posts]);
  return (
    <div className="App" id="app-root">
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts">
            <PostsPage username={username} />
          </Route>
          <Route exact path="/">
            <LoginPage username={username} setUsername={setUsername} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
