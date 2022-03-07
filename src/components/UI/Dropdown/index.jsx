import { useState, useEffect } from "react";
import { Dropdown as BDropdown } from "react-bootstrap";

import "./styles.scss";

export default function Dropdown(props) {
    const { onChange, options, defaultValue } = props;
    const [selected, setSelected] = useState('');

    useEffect(() => { setSelected(defaultValue) }, [])
    return (
        <BDropdown className="scrps-drpdwn">
            <BDropdown.Toggle variant="primary" id="dropdown-basic">
                {selected}
            </BDropdown.Toggle>

            <BDropdown.Menu>
                {options.map((item) => {
                    return <BDropdown.Item value={item.value} onClick={() => { setSelected(item.value); onChange(item.value); }}>
                        {item.key}
                    </BDropdown.Item>;
                })}
            </BDropdown.Menu>
        </BDropdown>
    );
}
