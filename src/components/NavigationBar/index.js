import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <Fragment>
            <div className="list-group">
                <Link to='/search'
                      className='list-group-item btn btn-outline-none'>
                    <i className="fa fa-2x fa-search" style={{color: "rgba(133, 88, 88)"}}/>
                    <div style={{fontSize: "x-small", color:"darkgray"}}>
                        Search Cocktail
                    </div>
                </Link>
                <Link to='/profile'
                      className='list-group-item mt-2 btn btn-outline-none'>
                    <i className="fas fa-2x fa-user-circle" style={{color: "rgba(133, 88, 88)"}}/>
                    <div style={{fontSize: "x-small", color:"darkgray"}}>
                        My Profile
                    </div>
                </Link>

                <Link to='/profile'
                      className='list-group-item mt-2 btn btn-outline-none'>
                    <i className="fas fa-2x fa-users" style={{color: "rgba(133, 88, 88)"}}/>
                    <div style={{fontSize: "x-small", color:"darkgray"}}>
                        Others
                    </div>
                </Link>

                <Link to='/about'
                      className='list-group-item mt-2 btn btn-outline-none'>
                    <i className="fas fa-2x fa-user-graduate" style={{color: "rgba(133, 88, 88)"}}/>
                    <div style={{fontSize: "x-small", color:"darkgray"}}>
                        About us
                    </div>
                </Link>
            </div>
        </Fragment>

    );
}
export default NavigationBar;