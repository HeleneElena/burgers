export const getData = async (url) => {
    const response = await fetch(url);
     if (response.ok) {
        return await response.json();
    }         
};