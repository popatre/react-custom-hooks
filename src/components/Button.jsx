export default function Button({ label, onClickFunc }) {
    return <button onClick={onClickFunc}>{label}</button>;
}
