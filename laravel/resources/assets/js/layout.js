
import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Layout extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            //
        }
    }

    render() {
        return (<div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Project name</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                {this.props.children}
            </div>
        </div>);
    }

}

export default Layout