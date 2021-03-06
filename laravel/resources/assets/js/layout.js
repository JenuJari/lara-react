
import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { logout } from './store/services/auth'

class Layout extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        isAuthenticated : PropTypes.bool,
        dispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            //
        }
    }

    logout(e) {
        e.preventDefault()
        
        this.props.dispatch(logout())
      }

    render() {
        return <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  { this.props.isAuthenticated ? 
                        <Link className="navbar-brand" to="/dashbord"> Project name </Link> :
                        <Link className="navbar-brand" to="/"> Project name </Link>
                  }
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                      { this.props.isAuthenticated ? 
                        <Link to="/dashbord">Home</Link> :
                        <Link to="/">Home</Link>
                      }
                    </li>
                </ul>
                  <ul className="nav navbar-nav navbar-right">
                    {this.props.isAuthenticated == false && <li><Link to="/login">Login</Link></li>}
                    {this.props.isAuthenticated == false && <li><Link to="/register">Register</Link></li>}
                    {this.props.isAuthenticated == true && <li><a href="javascript:void 0" onClick={e => this.logout(e)} >Logout</a></li>}
                  </ul>
                </div>
              </div>
            </nav>

            <div className="container">{this.props.children}</div>
          </div>;
    }

}

const mapStateToProps = store => {
  return { isAuthenticated: store.auth.isAuthenticated };
};

export default connect(mapStateToProps)(Layout);