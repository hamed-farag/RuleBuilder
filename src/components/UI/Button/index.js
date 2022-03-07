import "./styles.scss";
import { Button as BButton } from "react-bootstrap";

export default function Button(props) {
    return <BButton {...props} > {props.value} </BButton>
}
