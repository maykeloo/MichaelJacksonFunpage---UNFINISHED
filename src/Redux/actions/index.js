export const addFavourite = (favorite) => {
    return {
        type: 'ADDFAV',
        payload: favorite
    }
}

export const deleteFavourite = (favorite) => {
    return {
        type: 'DELFAV',
        payload: favorite
    }
}