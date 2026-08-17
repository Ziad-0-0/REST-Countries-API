import { Link } from "react-router-dom";
import { Search } from "../components/Search/Search";
import { useCountries } from "../hooks/useCountries";
import { useFilter } from "../hooks/useFilter";

const Home = () => {
    const { countries, loading, error } = useCountries();
    const { search, setSearch, region, setRegion, filteredCountries } =
        useFilter(countries);
    console.log(countries);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong!</p>;
    return (
        <>
            <Search
                search={search}
                setSearch={setSearch}
                setRegion={setRegion}
            />
            <section className="container countries-grid cards-section">
                {filteredCountries.map((country) => (
                    <Link
                        to={`country/${country.name}`}
                        className="card"
                        key={country.name}
                    >
                        <div>
                            <img src={country.flag} alt="" />
                        </div>
                        <div className="info">
                            <h2>{country.name}</h2>
                            <ul>
                                <li>Population: {country.population}</li>
                                <li>Region: {country.region}</li>
                                <li>Capital: {country.capital}</li>
                            </ul>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    );
};

export default Home;
