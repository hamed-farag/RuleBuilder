import "./styles.scss";

export default function Dropdown(props) {
    const { onChange, options, defaultValue } = props;
    return (
        <select onChange={onChange} className="scrps-drpdwn">
            {options.map((item) => {
                if (defaultValue && item.value === defaultValue) {
                    return (
                        <option value={item.value} selected>
                            {item.key}
                        </option>
                    );
                }
                return <option value={item.value}>{item.key}</option>;
            })}
        </select>
    );
}
