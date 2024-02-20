import './CustomButton.css';

function CustomButton({ type, children, onClick, disabled = false, classname = "" }) {
    return (
        <button type={type} disabled={disabled} onClick={onClick} className={classname}>
            {children}
        </button>
    );
}
export default CustomButton;