export const MAX_STORIES = 500;
export const MORE_STORIES = 30;
export const addToLocalStorage = (e) => {
    console.log(e.target)
    var existing = localStorage.getItem('savedItems');
    existing = existing ? existing.split(',') : [];
    existing.push(e.target.value);
    window.localStorage.setItem('savedItems',existing.toString())
}
export const getFromLocalStorage = () => {
    let existingNews = localStorage.getItem('savedItems');
    existingNews = existingNews ? existingNews.split(',') : []
    return existingNews
}