import './CustomButton.css';

function CustomButton({ type, children, onClick, d = false, classname = "" }) {
    return (
        <button type={type} disabled={d} onClick={onClick} className={classname}>
            <div className="custom-button-center">
            {children}
            </div>
        </button>
    );
}
export default CustomButton;