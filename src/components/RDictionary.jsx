import React, { useState } from 'react';
import './RDictionary.css';

const RDictionary = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [searchInput, setSearchInput] = useState('');


  const dictionary = {
    'Gautami': 'One Who Enlightens; One Who Removes Darkness',
    'mrugnayani': 'A Girl With Eyes As Beautiful As That Of A Deer.',
    'prathmesh': 'God Ganesh Name.',
    'Vashakhi': 'A girl born in Vaishakh Marathi Month.',
    'tejshree': 'A brighter women.',
    'divya':'the girl name represents the light',
  
  };

  const handleWordSelect = (event) => {
    const selectedWord = event.target.value;
    setSelectedWord(selectedWord);

    if (dictionary[selectedWord]) {
      setMeaning(dictionary[selectedWord]);
    } else {
      setMeaning('Meaning not found.');
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleShowMeaning = () => {
    if (dictionary[searchInput]) {
      setSelectedWord(searchInput);
      setMeaning(dictionary[searchInput]);
    } else {
      setSelectedWord('');
      setMeaning('Meaning not found.');
    }
  };

  return (
    <div className="R-dictionary">
     <h2>React Mini Dictionary</h2>
     <div className="upleft">
     <label for="selectword">Select Word :</label>
     <select id="selectword" value={selectedWord} onChange={handleWordSelect} className="search-bar2">
        <option value="">Select a word</option>
        <option value="mrugnayani">Mrugnayani</option>
        <option value="prathmesh">Prathmesh</option>
        <option value="Vashakhi">Vaishakhi</option>
        <option value="tejshree">Tejshree</option>
        <option value="Gautami">Gautami</option>
        <option value="divya">Divya</option>
      
      </select>

     </div> 
   
         <div className="search-bar">
          <input
          type="text" 
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchInputChange}
         />
         <button className="show-button" onClick={handleShowMeaning}>Show Information</button>
         </div>


      <div className="meaning">
        <b>All Information:</b> {meaning}
      </div>
      <div className="Category">
   <b></b>
      </div>
     
    </div>
  );
};

export default RDictionary;


