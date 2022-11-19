import React, { useReducer, useState } from 'react';
import data from './data';
import List from './List';

function deleteItem(arr, clickedId) {
  const index = arr.findIndex((single) => single.id === clickedId);
  return [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)];
}

// function appReducer(state, action) {
//   switch (action.type) {
//     case 'delete-data':
//       return {
//         people: [],
//       };

//     case 'delete-single-data':
//       return {
//         people: deleteItem(state.people, action.skipItemId),
//       };
//     case 'refresh-click':
//       return {
//         people: [...data],
//       };
//     default:
//       throw new Error('Not gonna run');
//   }
// }

// const ACTION = {
//   deleteData: 'delete-data',
//   deleteSingleData: 'delete-single-data',
//   refreshData: 'refresh-click',
// };

const App = () => {
  // const [state, dispatch] = useReducer(appReducer, { people: data });
  // function handleClick() {
  //   if (state.people.length < 1) {
  //     dispatch({ type: ACTION.refreshData });
  //     return;
  //   }
  //   dispatch({ type: ACTION.deleteData });
  // }

  // function handleDelete(clickedID) {
  //   dispatch({ type: ACTION.deleteSingleData, skipItemId: clickedID });
  // }

  const [people, setPeople] = useState(data);

  function handleDelete(clickedId) {
    setPeople((prevPeople) => deleteItem(prevPeople, clickedId));
  }

  return (
    <main>
      <section className='container'>
        <h2>
          <span>{people.length}</span> birthdays today
        </h2>
        <List people={people} handleSingleClick={handleDelete} />

        {people.length > 0 ? (
          <button className='btn' onClick={() => setPeople((prev) => [])}>
            Clear all
          </button>
        ) : (
          <button
            className='btn'
            onClick={() => setPeople((prev) => [...data])}
          >
            refresh
          </button>
        )}
      </section>
    </main>
  );
};

export default App;
