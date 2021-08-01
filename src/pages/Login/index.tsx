import { useHistory } from "react-router-dom";
import { Button, Input } from "../../components";
import "./style.css";
export const LoginPage: React.FC<{ username: string; setUsername: (to: string) => void }> = ({ setUsername, username }) => {
  const history = useHistory();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    history.push("/posts");
  }

  return (
    <main className="login-container">
      <form onSubmit={handleSubmit} className="standard-form">
        <h1>Welcome to CodeLeap network!</h1>
        <Input
          placeholder="John doe"
          label="Please enter your username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Button uppercase disabled={!username}>
          Enter
        </Button>
      </form>
    </main>
  );
};
