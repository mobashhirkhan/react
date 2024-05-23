const Navigation = () => {

    return(
        <nav className="container">
        <div className="logo">
          <img src="/images/city_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#"> Tickets </li>
          <li href="#"> Trophies </li>
          <li href="#"> Players </li>
          <li href="#"> Stadium </li>
        </ul>
        <button>Login</button>
      </nav>
    ); 
};

export default Navigation;