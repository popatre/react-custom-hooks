import axios from "axios";

const googleBooks = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
});

export const getBooks = (query) => {
    return googleBooks
        .get(`/volumes`, { params: { q: query } })
        .then(({ data }) => {
            return data.items;
        });
};

export const getPublishersBooks = (publisher, limit = 10) => {
    return googleBooks
        .get(`/volumes?q=inpublisher:${publisher}&maxResults=${limit}`)
        .then(({ data }) => {
            return data.items;
        });
};
