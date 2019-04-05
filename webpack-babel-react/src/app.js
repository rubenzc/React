import React from "react";
// import NavBar from './components/NavBar';
// import SideBar from './components/SideBar';
import "./app.scss";

class App extends React.Component {
  render() {
  return (
		
		<div className="dashboard-wrapper">

			{/* NavBar component */}
			<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap shadow">
				<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">TRADING</a>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
				<ul className="navbar-nav px-3">
					<li className="nav-item text-nowrap">
						<a className="nav-link" href="#">Sign out</a>
					</li>
				</ul>
			</nav>

			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2 d-md-block bg-light sidebar">
						<div className="sidebar-sticky">
							<ul className="nav flex-column">
								<li className="nav-item">
									<a className="nav-link active" href="#">
										Dashboard <span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Orders
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Products
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Customers
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Reports
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Integrations
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</div>
		

  );}}
  export default App;