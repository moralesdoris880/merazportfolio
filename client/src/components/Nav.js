function Nav() {
    return (
    <div>
    <p>Meraz Mamun</p>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
    </ul>
    </div>    
    );
  }
  
  export default Nav;