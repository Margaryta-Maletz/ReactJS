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

export const multiGenres = [
    {label: "Action", value: "Action"},
    {label: "Adventure", value: "Adventure"},
    {label: "Animation", value: "Animation"},
    {label: "Comedy", value: "Comedy"},
    {label: "Drama", value: "Drama"},
    {label: "Family", value: "Family"},
    {label: "Fantasy", value: "Fantasy"},
]
