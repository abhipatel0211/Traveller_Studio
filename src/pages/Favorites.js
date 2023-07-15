import { useContext  } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../Components/meetups/MeetupList";

function Favorites()
{
    const favoritectx = useContext(FavoritesContext);

    let content ;

    if(favoritectx.totalFavorites === 0)
    {
        content = <p> NO content Yet </p>
    }
    else
    {
        content = <MeetupList meetups={favoritectx.favorites} />
    }

    return <section>
        <h1>My Favorites Places</h1>
        {content}
    </section>;
}

export default Favorites;