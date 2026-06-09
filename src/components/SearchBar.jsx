import { useState } from "react"

function SearchBar({ onSearch }) {

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.trim()) onSearch(search)
    }

    return(
        <form onSubmit={handleSubmit} className="w-fit m-auto mt-15">
            <label htmlFor="" className="font-[Montserrat] font-bold text-xl mx-2 [text-shadow:0px_2px_5px_rgb(0_0_0_/150%)] text-slate-200">City: </label>
            
            <input type="search" value={search} name="" id="" placeholder="Type the name of the City" 
            className="bg-white border-2 border-slate-500 pl-1 pr-1 pt-0.5 pb-0.5 rounded-sm"
            onChange={(e) => setSearch(e.target.value)}/>
            
            <button type="submit" className="ml-3 bg-slate-200 border-2 border-slate-400 pl-1 pr-1 pt-0.5 pb-0.5 rounded-md cursor-pointer">
                Search
            </button>
        </form>
    )
}

export default SearchBar;