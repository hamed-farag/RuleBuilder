import { useState } from "react";
import { Dropdown as BDropdown } from "react-bootstrap";

import "./styles.scss";

export default function Dropdown(props) {
    const { onChange, options, defaultValue } = props;
    const [selected, setSelected] = useState(defaultValue);

    return (
        <BDropdown className="scrps-drpdwn">
            <BDropdown.Toggle variant="primary" id="dropdown-basic">
                {selected}
            </BDropdown.Toggle>

            <BDropdown.Menu>
                {options.map((item) => {
                    if (selected && item.value === selected) {
                        return (
                            <BDropdown.Item value={item.value} selected>
                                {item.key}
                            </BDropdown.Item>
                        );
                    }
                    return <BDropdown.Item value={item.value} onClick={() => { setSelected(item.value); onChange(item.value); }}>
                        {item.key}
                    </BDropdown.Item>;
                })}
            </BDropdown.Menu>
        </BDropdown>
    );
}
