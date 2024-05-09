import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const URL =
    "https://discord.com/oauth2/authorize?client_id=1237993710483013703&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&scope=email+guilds.join+guilds+gdm.join+identify+connections";

  return (
    <div>
      <h1>LoginPage</h1>
      <Link to={URL}>
        <button>Login</button>
      </Link>
    </div>
  );
};

export default LoginPage;
