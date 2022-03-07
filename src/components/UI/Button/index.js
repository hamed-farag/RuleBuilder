import "./styles.scss";
import { Button as BButton } from "react-bootstrap";

export default function Button(props) {
    return <BButton variant="primary" {...props} > {props.value} </BButton>
}
