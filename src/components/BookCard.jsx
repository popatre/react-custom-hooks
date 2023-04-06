export default function BookCard({ title, imgUrl, setIsOpen }) {
    const handleModal = () => {
        setIsOpen((prevOpen) => !prevOpen);
    };
    return (
        <div onClick={handleModal}>
            <p> {title}</p>
            <img src={imgUrl.imageLinks.thumbnail} alt="book thumbnail" />
        </div>
    );
}
