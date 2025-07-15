function Button({ id, label, onClick, className }) {
    return (
        <button id={id} onClick={onClick} className={className}>
            {label}
        </button>
    );
}

export default Button;