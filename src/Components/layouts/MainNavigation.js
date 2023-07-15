import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation()
{
    const favoritectx = useContext(FavoritesContext);
    return(<header className={classes.header}>
        <div className={classes.logo} >Traveller Studio</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Place</Link>
                </li>
                <li>
                    <Link to='/new-places'>Add New Place</Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites <span className={classes.badge}>{favoritectx.totalFavorites} </span> </Link>
                </li>
            </ul>
        </nav>
        </header>
    )

}

export default MainNavigation;