import React, { useEffect, useState } from 'react';

const SearchToy = ({onSearch}) => {

    const [searchText, setSearchText] = useState("");

    const handleTyping = event => {
        setSearchText(event.target.value)
    }

    useEffect(() => {
       onSearch(searchText)
    }, [searchText])
    
    // console.log(searchText)
    return (
        <div>
            <input type="text" placeholder="Search Toys" className="input input-bordered input-info w-[20rem] shadow-xl mx-auto"
                onChange={handleTyping }
                value={searchText}
            />
        </div>
    );
};

export default SearchToy;