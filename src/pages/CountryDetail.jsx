import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../hooks/useCountries";
import { FaArrowLeft } from "react-icons/fa";

const CountryDetail = () => {
    const { name } = useParams();
    const decodeName = decodeURI(name);
    const { countries } = useCountries();
    const country = countries.find(
        (country) => country.name.toLowerCase() === decodeName.toLowerCase(),
    );
    const navigate = useNavigate();
    if (!country) return <p>Loading...</p>;
    return (
        <>
            <section className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> back
                </button>
                <div className="country">
                    <div>
                        <img src={country.flag} alt="" />
                    </div>
                    <div className="info">
                        <h2>{country.name}</h2>
                        <div className="ul">
                            <ul>
                                <li>Native Name: {country.nativeName}</li>
                                <li>Population: {country.population}</li>
                                <li>Region: {country.region}</li>
                                <li>Sub Region: {country.subregion}</li>
                                <li>Capital: {country.capital}</li>
                            </ul>
                            <ul>
                                <li>
                                    Top Level Domain: {country.topLevelDomain}
                                </li>
                                <li>
                                    Currencies:{" "}
                                    {country.currencies
                                        .map((c) => c.name)
                                        .join(`, `)}
                                </li>
                                <li>
                                    Languages:{" "}
                                    {country.languages
                                        .map((l) => l.name)
                                        .join(`, `)}
                                </li>
                            </ul>
                        </div>
                        {country.borders ? (
                            <div className="border-countries">
                                <p>Border Countries:</p>
                                {country.borders.map((b) => (
                                    <div key={b}>{b}</div>
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CountryDetail;
