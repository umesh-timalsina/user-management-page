/**
 * Menu items of sidebar
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */

// Libraries
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// Style
import { SideBarMenu as STYLE } from '../../../client/style';

export default class SideBarMenu extends Component {

    render() {
        const { basePath } = this.props;

        return (
        <ul className="sidebar-menu" style={STYLE.sidebarCategoryStyle}>

            <li className="header">Site Navigation</li>

            <li className={/home$/.test(this.props.location.pathname) ? 'active' : ''}>
                <Link to={`${basePath}home`} style={{textDecoration: "none"}}>
                    <i className="fa fa-home"/><span>Home</span>
                </Link>
            </li>

            <li className={/profile$/.test(this.props.location.pathname) ? 'active' : ''}>
                <Link to={`${basePath}profile`} style={{textDecoration: "none"}}>
                    <i className="fa fa-user"/><span>My Profile</span>
                </Link>
            </li>

            <li className={/projects/.test(this.props.location.pathname) ? 'active' : ''}>
                <Link to={`${basePath}projects`} style={{textDecoration: "none"}}>
                    <i className="fa fa-cubes"/><span>My Projects</span>
                </Link>
            </li>

            <li className={/organizations/.test(this.props.location.pathname) ? 'active' : ''}>
                <Link to={`${basePath}organizations`} style={{textDecoration: "none"}}>
                    <i className="fa fa-university"/><span>My Organizations</span>
                </Link>
            </li>

            <li className={/users/.test(this.props.location.pathname) ? 'active' : ''}>
                <Link to={`${basePath}users`} style={{textDecoration: "none"}}>
                    <i className="fa fa-users"/><span>Users</span>
                </Link>
            </li>

            {/*
            <li className="treeview">
                <a href="#">
                    <i className="fa fa-link"/> <span>Multilevel</span> <i className="fa fa-angle-left pull-right"/>
                </a>
                <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"/>Sublevel 1</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"/>Sublevel 2</a></li>
                </ul>
            </li>
            */}

        </ul>
        );
    }

}

SideBarMenu.propTypes = {
    basePath: PropTypes.string.isRequired
};