import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const secret = e.target[1].value;
    console.log(username + "..." + secret);
    props.onAuth({ username, secret });

    axios
      .post("http://localhost:3001/authenticate", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <input
            className="auth-input"
            name="username"
            placeholder="Username"
          />
          <input
            className="auth-input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
