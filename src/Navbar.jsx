
export default function Navbar() {
  return ( <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizza   </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Contact</a>
        <a className="nav-link" href="#">Login</a>
        <a className="nav-link" href="#">Register</a>
      </div>
    </div>
  </div>
</nav>
</>
  )
}
