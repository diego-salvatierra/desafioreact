// Reducer for adding favorites

const addFavorite = (favoriteList, { type, id }) => {
  switch (type) {
    case 'add':
      return ([...favoriteList, id])
    case 'remove':
      return favoriteList.filter(index => (index !== id)) 
    default:
      return favoriteList;
  }
}

export default addFavorite
