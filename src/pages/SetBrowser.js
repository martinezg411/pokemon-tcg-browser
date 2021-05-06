import SetItem from '../components/SetItem';
import data from '../constants/data';
import queryString from 'query-string';

let sets = [];

for (let key of Object.getOwnPropertyNames(data)) {
  const set = data[key];
  sets.push({
    id: key,
    name: set.name,
    symbol: set.symbol,
    releaseDate: set.releaseDate,
  });
}

sets = sets.reverse();

const SetBrowser = ({ history }) => {
  const handleClick = (setID) => {
    const query = {
      set: setID,
    };
    const stringified = queryString.stringify(query);
    const path = `/cards?${stringified}`;
    history.push(path);
  };

  return (
    <div className='container mx-auto text-white px-2 sm:px-0 my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 '>
      {sets.map((item) => (
        <SetItem key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default SetBrowser;
