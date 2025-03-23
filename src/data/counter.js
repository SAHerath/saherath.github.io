export const countPageViews = () => {
    let pageviewCount = localStorage.getItem('pageviewCount');

    if (pageviewCount) {
        pageviewCount = parseInt(pageviewCount);
    } else {
        pageviewCount = 0;
    }

    pageviewCount++;

    localStorage.setItem('pageviewCount', pageviewCount);

    return pageviewCount;
};