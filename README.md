# Custom React Hooks

## Setup

1. npm install

2. npm run dev to start the server

## Task

1. Refactor BooksGrid to use a custom hooks named `useGoogleBooks` - the file has been created for you in the `hooks` folder.

You should be able to line refactor 24 - 45 in `BooksGrid` with your custom hook to enable the component to still work.

2. Google books also accepts the ability to limit the amount of results via a parameter of `maxResults`. Add some more functionality to your custom hook/app to enable the amount of results to be limited

### Extra

3. Clicking a book reveals a modal with the names of 3 of the publishers other books. In your hook, **create a function** named `fetchPublishersBooks`.

This function should accept the current publisher of the book clicked, and use the api function `getPublishersBooks` (already made for you) to get 3 books by this publisher.

These should then be displayed in the modal.
