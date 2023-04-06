# Custom React Hooks

## Setup

1. npm install

2. npm run dev to start the server

## Task

1. Refactor BooksGrid to use a custom hooks named `useGoogleBooks` - the file has been created for you in the `hooks` folder.

You should be able to refactor 24 - 45 in `BooksGrid` with your custom hook to enable the component to still work.

2. Google books also accepts the ability to limit the amount of results via a parameter of `maxResults`. Add some more functionality to your custom hook/app to enable the amount of results to be limited

### Extra

3. Create a new hook named `usePublishersBooks`. This hook should accept a publisher and a limit as arguments.
   It should make a request using the `getPublishersBooks` api function (already created for you).

Use this hook to update the modal when you click a book. The modal should show 3 books by the same publisher of the book.
