import React from "react";
import "./../../scss/Search.scss";

const Search = ({ change, value, submit }) => {
    return (
        <div className="search">
            <form onSubmit={submit} className="search__form">
                <input
                    type="text"
                    onChange={change}
                    value={value}
                    placeholder="Wpisz miasto..."
                    className="search__input-text"
                />
                <input
                    type="submit"
                    value="Szukaj"
                    className="search__input-submit"
                />
            </form>
        </div>
    );
};

export default Search;
