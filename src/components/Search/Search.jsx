import { useState } from "react";
import "./style.css";
import { IoIosArrowDown } from "react-icons/io";
export const Search = ({ search, setSearch, setRegion }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="search">
            <div className="container">
                <input
                    type="text"
                    value={search}
                    placeholder="Search For a Country"
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                <div className="drop-dawn">
                    <button
                        onClick={() =>
                            isOpen === true ? setIsOpen(false) : setIsOpen(true)
                        }
                    >
                        Filter by Region
                        <IoIosArrowDown />
                    </button>
                    {isOpen && (
                        <ul className="menu">
                            {[
                                "All",
                                "Africa",
                                "Americas",
                                "Asia",
                                "Europe",
                                "Oceania",
                            ].map((r) => (
                                <li
                                    key={r}
                                    onClick={() => {
                                        setRegion(r);
                                        setIsOpen(false);
                                    }}
                                >
                                    {r}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
