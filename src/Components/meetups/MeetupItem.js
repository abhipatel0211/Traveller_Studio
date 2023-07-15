import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props){
    const favoritectx = useContext(FavoritesContext);
    const itemIsFavorite = favoritectx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if(itemIsFavorite)
        {
            favoritectx.removeFavorite(props.id);
        }
        else
        {
            favoritectx.addFavorite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address,
            });
        }
    }

    return (
    <Card>
    <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            {/* <button onClick={toggleFavoriteStatusHandler}>To Favorites</button> */}
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from favorites' : 'To Favorites'} </button>
        </div>
    </li>
    </Card>
    );
}

export default MeetupItem;