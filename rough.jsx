import { useState } from "react";
import { Search } from "lucide-react";
import './rough.css'

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <Search size={20} />
        </button>
      </form>
    </div>
  );
}
