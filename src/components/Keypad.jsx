import Button from "./Button";

function Keypad({ onInput, onEquals }) {
    const buttons = [
        {id: "seven", label: "7" },
        {id: "eight", label: "8" },
        {id: "nine", label: "9" },
        {id: "divide", label: "/" },
        {id: "four", label: "4" },
        {id: "five", label: "5" },
        {id: "six", label: "6" },
        {id: "multiply", label: "x" },
        {id: "one", label: "1" },
        {id: "two", label: "2" },
        {id: "three", label: "3" },
        {id: "subtract", label: "-" },
        {id: "zero", label: "0" },
        {id: "decimal", label: "." },
        {id: "add", label: "+" },
        {id: "clear", label: "C" },
        {id: "equals", label: "=" }
    ];

    return (
        <div className="key-pad">
            {buttons.map(({ id, label, className, onClick }) => (
                <Button 
                key={id}
                id ={id}
                label={label}
                className={className || "num-btn"}
                onClick={onClick || onInput}
                />
            ))}
        </div>
    );
}

export default Keypad;