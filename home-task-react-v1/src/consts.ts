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
    release_date = 'Release Date',
    title = 'Title',
    genre = 'Genre',
}

export const genres = Object.values(Genre);
export const sortList = Object.entries(SortList).map(([id, value]) => ({ id, value}));
