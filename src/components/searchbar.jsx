import React from "react";

export default function SearchBar ({searchTerm,onSearchChange}) {
   return (
    <input
    type="text"
    placeholder="search expenses..."
    value={searchTerm}
    onChange={(e)=> onSearchChange}
    />
   ) 
}