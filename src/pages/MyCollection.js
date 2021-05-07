import { useContext, useState, useEffect } from 'react';
import UserContext from '../context/user/UserContext';
import data from '../constants/data';
import SetProgressItem from '../components/SetProgressItem';
import Spinner from '../components/Spinner';

const MyCollection = () => {
  const userContext = useContext(UserContext);
  const { collection } = userContext;
  const [collectionSets, setCollectionSets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Check user collection to find all sets that have at least one card.
  useEffect(() => {
    const items = [];
    for (let key of Object.getOwnPropertyNames(collection)) {
      const setData = data[key];
      items.push({
        id: key,
        ...setData,
        cards: collection[key],
      });
    }

    items.sort((item1, item2) => {
      const splitItem1 = item1.releaseDate.split('/');
      const splitItem2 = item2.releaseDate.split('/');
      const date1 = new Date(
        parseInt(splitItem1[0]),
        parseInt(splitItem1[1]) - 1,
        parseInt(splitItem1[2]),
      );
      const date2 = new Date(
        parseInt(splitItem2[0]),
        parseInt(splitItem2[1]) - 1,
        parseInt(splitItem2[2]),
      );
      return date2 - date1;
    });

    setCollectionSets(items);
    setIsLoading(false);
  }, [collection]);

  if (isLoading) {
    return <Spinner message='Retrieving your collection.' />;
  } else {
    return (
      <div className='container mx-auto my-8 px-2 flex flex-col'>
        {collectionSets.length === 0 ? (
          <h1 className='text-white text-center font-bold'>
            Your collection is empty. Add cards and your progress for the
            appropriate set will be displayed here.
          </h1>
        ) : (
          <div>
            {collectionSets.map((set) => (
              <SetProgressItem key={set.id} information={set} />
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default MyCollection;
