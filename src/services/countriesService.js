export const getCountries = async () => {
    const res = await fetch("/data.json");
    if (!res.ok) throw new Error("Failed To Fetch");
    return res.json();
};
