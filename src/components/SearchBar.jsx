import { useState } from "react"

function SearchBar({ onSearch }) {

    const [search, setSearch] = useState('')

    return(
        <div className="w-fit m-auto mt-15">
            <label htmlFor="">City: </label>
            <input type="search" value={search} name="" id="" placeholder="Type the name of the City" className="bg-white border-2 border-blue-800 pl-1 pr-1 pt-0.5 pb-0.5 rounded-sm"
            onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit" className="ml-3 bg-slate-300 border-2 border-slate-500 pl-1 pr-1 pt-0.5 pb-0.5 rounded-md" 
            onClick={() => {
                if (search.trim()) onSearch(search)
            }} >
                Search</button>
        </div>
    )
}

export default SearchBar;