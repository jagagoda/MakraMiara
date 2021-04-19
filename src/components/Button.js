import { Link } from 'react-router-dom';
import {StyledButton} from "./styles/styles";

const Button = (props) => {
    let {text, onClick, to, className} = props;
    return (
        <StyledButton>
        <Link
            to={to}
            onClick={onClick}
            className={className}>
            {text}
        </Link>
        </StyledButton>
    );
};
export default Button;