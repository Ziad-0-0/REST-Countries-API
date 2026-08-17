import { useState } from "react";

export const useFilter = (countries = []) => {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All");
    const filteredCountries = countries.filter((country) => {
        const matchSearch = country.name
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchRegion = region === "All" || country.region === region;
        return matchSearch && matchRegion;
    });

    return { search, setSearch, region, setRegion, filteredCountries };
};
