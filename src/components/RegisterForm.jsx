import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function RegisterForm() {
  const { register } = useAuth();
  const navigate = useNavigate();
  async function loginAction(formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    const credentials = {
      username,
      password,
    };

    register(credentials);
  }

  return (
    <form action={loginAction}>
      <label>
        Username
        <input name="username" />
      </label>

      <label>
        Password
        <input name="password" type="password" />
      </label>

      <button>Login</button>
    </form>
  );
}
