import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../store/favorites-context';

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have not favorites yet. Start adding some</p>;
  } else {
    content = (
      <ul>
        <MeetupList meetups={favoritesCtx.favorites} />
      </ul>
    );
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
