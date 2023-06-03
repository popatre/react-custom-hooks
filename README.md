# Custom React Hooks

## Setup

1. npm install

2. npm run dev to start the server

## Task

1. Refactor BooksGrid to use a custom hook named `useGoogleBooks` - the file has been created for you in the `hooks` folder.

You should be able to refactor `BooksGrid` with your custom hook to enable the component to still work.

2. Google books also accepts the ability to limit the amount of results via a parameter of `maxResults`. Add some more functionality to your custom hook/app to enable the amount of results to be limited

3. Create a new hook named `usePublishersBooks`. This hook should accept a publisher and a limit as arguments.
   It should make a request using the `getPublishersBooks` api function (already created for you).

Use this hook to update the modal when you click a book. The modal should show 3 books by the same publisher of the book.

4. Create a hook named `useModal` which will handle the state, as well as the functions to open/close the modal.

### Extra

5. Add some routing and create a route to a publishers page. `/publishers/:publisher`.
   Use your `usePublishersBooks` hook to list books by a specific publisher. You should also re-use the BookCard component to display the publishers books.

6. Currently the BookCard component displays a modal of publishers books when clicked. This hinders our ability to reuse this component (we might want other behaviour/ not a modal to be shown, when clicked in other places).

Refactor it so that is displays a modal when clicked on the books page, but doesn't display a modal when used in the publishers page.
