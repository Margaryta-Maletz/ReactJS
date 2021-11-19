export enum Genre {
    Action = 'Action',
    Adventure = 'Adventure',
    Animation = 'Animation',
    Comedy ='Comedy',
    Drama = 'Drama',
    Family = 'Family',
    Fantasy = 'Fantasy',
}

export enum SortList {
    "" = 'rating',
    release_date = 'Release Date',
    title = 'Title',
    genre = 'Genre',
}

export const genres = Object.values(Genre);
export const sortListItems = Object.keys(SortList);
export const sortList = Object.entries(SortList).map(([id, value]) => ({ id, value}));
export const multiGenres = Object.entries(Genre).map(([id, value]) => ({ label: id, value: value}));

