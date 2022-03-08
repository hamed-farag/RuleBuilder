import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

import "./styles.scss";

export default function TextArea({ value, label, onChange }) {
    return (
        <article className="scrps-txtarea">
            {label && (
                <FormLabel htmlFor={label}>
                    <b>{label}</b>
                </FormLabel>
            )}
            <FormControl id={label} as="textarea" rows={3} value={value} onChange={onChange} />
        </article>
    );
}
