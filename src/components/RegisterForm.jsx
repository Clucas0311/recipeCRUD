export default function LoginForm() {
  async function loginAction(formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    const credentials = {
      username,
      password,
    };

    console.log(credentials);
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
