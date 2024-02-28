const LogIn = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <>
      <h2>
        Este es el componente {"<Login>"} y Bienvenido a Nuestro Restaurante
       
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <br />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LogIn;
