import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

import "./styles.scss";

export default function Textbox({ label, value, onChange }) {
    return (
        <article className="scrps-txt">
            {label && (
                <FormLabel htmlFor={label}>
                    <b>{label}</b>
                </FormLabel>
            )}
            <FormControl id={label} value={value} onChange={onChange} />
        </article>
    );
}
