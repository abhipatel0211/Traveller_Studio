import { createContext, useState } from 'react';
// import { useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}

});
export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        
        // setUserFavorites(userFavorites.concat(favoritesMeetup));// As we are directly
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
        
    }
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);// it is a buit in method which takes function as an argument and which execute for the every item of an array and we get that item as a perameter and we have to return true if want to keep that item and false to remove it 
        });      
    }
function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
        //some is a buit in method in vanilla js it also wants a function as an argument which executes for the every item of an array it will return true or false as per OR 
    }

    const context = { 
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };// context object

    // .provider component is the built in context object
    return (
    <FavoritesContext.Provider value={context}>
    {props.children}
    </FavoritesContext.Provider>
    );
}

export default FavoritesContext;