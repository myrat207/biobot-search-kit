import './KitSearch.css';
import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";

const KitSearch = () => {
    const [query, setQuery] = useState('');
    const [kits, setKits] = useState([]);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedKit, setSelectedKit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false); 
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    const isValidInput = inputValue => /^[0-9-]*$/.test(inputValue);

    const fetchKits = () => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/api/kits?search=${query}`)
            .then(res => res.json())
            .then(data => {
                setKits(data);
                setIsLoading(false);
                setDropdownVisible(data.length > 0);
                setError(data.length > 0 ? null : 'No kits found for this search.');
            })
            .catch(err => {
                console.error('Error fetching kits:', err);
                setError('Failed to fetch kits. Please try again.');
                setIsLoading(false);
            });
    };

    const handleInputChange = (e) => {
      const inputValue = e.target.value;
  
      if (isValidInput(inputValue)) {
          setError(null);
          setQuery(inputValue);
          
          if (!inputValue) {
              setSelectedKit(null);
              setHasSearched(false);
          }
      } else {
          setError('Invalid input. Only numbers and hyphens are allowed.');
      }
  };
  

    useEffect(() => {
        if (debounceTimeout) clearTimeout(debounceTimeout);
        if (!query || hasSearched) return;

        setDebounceTimeout(setTimeout(fetchKits, 300));
    }, [query]);

    const handleKitSelection = kit => {
        setSelectedKit(kit);
        setDropdownVisible(false);
        setHasSearched(true);
    };

    return (
        <div className="kit-search">
            <input 
                type="text" 
                placeholder="Search for a kit..."
                value={query}
                onChange={handleInputChange}
            />
            
            {isLoading && <BeatLoader />}
            {error && <div className="error-message">{error}</div>}
            
            {selectedKit && (
                <div className="kit-details">
                    <h2>Kit Details:</h2>
                    <p><strong>Label ID:</strong> {selectedKit.label_id}</p>
                    <p><strong>Shipping Tracking Code:</strong> {selectedKit.shipping_tracking_code}</p>
                </div>
            )}

            {isDropdownVisible && (
                <div className="autocomplete-dropdown">
                    {kits.map(kit => (
                        <div 
                            key={kit.id} 
                            className="kit-item"
                            onClick={() => handleKitSelection(kit)}
                        >
                            {kit.label_id} - {kit.shipping_tracking_code}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default KitSearch;
