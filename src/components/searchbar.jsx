import React from "react";

export default function SearchBar ({searchTerm, onSearchChange}) {
   return (
    <input
    type="text"
    placeholder="search"
    value={searchTerm}
    onChange={(e)=> onSearchChange(e.target.value)}
    />
   ) 
}