import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar (props) {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary  border-bottom border-body" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
      </ul>
      {/* color palettes */}
      <div className="d-flex">
        <div onClick={()=>{props.togglemode('primary')}} className="bg-primary rounded mx-2 my-1" style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div onClick={()=>{props.togglemode('danger')}} className="bg-danger rounded mx-2 my-1" style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div onClick={()=>{props.togglemode('success')}} className="bg-success rounded mx-2 my-1" style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div onClick={()=>{props.togglemode('warning')}} className="bg-warning rounded mx-2 my-1" style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      </div>

      <form className="d-flex" role="search">
        <div className={`form-check form-switch text-${(props.mode === 'light'?"Dark":"light")}`}>
        <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.togglemode(null)}}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>Enable Dark Mode</b></label>
      </div>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {  // this make sure we enter correct data type & isRequired means we cant leave empty
    title: PropTypes.string.isRequired, 
    home: PropTypes.string
}

Navbar.defaultProps = {    // declare default props value
    title: "Masssum2",
    home: "Home2"
}
