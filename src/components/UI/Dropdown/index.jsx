import { useState, useEffect } from "react";
import BDropdown from "react-bootstrap/Dropdown";
import FormLabel from "react-bootstrap/FormLabel";

import "./styles.scss";

export default function Dropdown(props) {
    const { onChange, options, defaultValue, label } = props;
    const [selected, setSelected] = useState("");

    useEffect(() => {
        setSelected(defaultValue);
    }, [defaultValue]);

    return (
        <article className="scrps-drpdwn">
            {label && (
                <FormLabel htmlFor={label}>
                    <b>{label}</b>
                </FormLabel>
            )}
            <BDropdown id={label}>
                <BDropdown.Toggle variant="primary" id="dropdown-basic">
                    {selected}
                </BDropdown.Toggle>

                <BDropdown.Menu>
                    {options.map((item) => {
                        return (
                            <BDropdown.Item
                                value={item.value}
                                onClick={() => {
                                    setSelected(item.value);
                                    onChange(item.value);
                                }}
                            >
                                {item.key}
                            </BDropdown.Item>
                        );
                    })}
                </BDropdown.Menu>
            </BDropdown>
        </article>
    );
}
