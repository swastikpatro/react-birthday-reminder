import React from 'react';

const List = ({ people, handleSingleClick }) => {
  function handleContainerClick(e) {
    if (!e.target.classList.contains('delete-btn')) {
      return;
    }

    handleSingleClick(Number(e.target.dataset.id));
  }

  return (
    <div className='list-container' onClick={(e) => handleContainerClick(e)}>
      {people.map((person) => (
        <article key={person.id} className='person'>
          <img src={person.image} alt={person.name} className='person-img' />
          <div className='person-info'>
            <h3>{person.name}</h3>
            <p>{person.age} years</p>
          </div>
          <button
            data-id={person.id}
            className='delete-btn'
            // onClick={() => handleSingleClick(index)}
          >
            X
          </button>
        </article>
      ))}
    </div>
  );
};

export default List;
