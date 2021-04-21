
import {StyledButton} from "../styles/atoms";

const Button = (props) => {
    let {text, onClick, className} = props;
    return (
        <StyledButton
            onClick={onClick}
            className={className}>
            {text}
        </StyledButton>
    );
};
export default Button;