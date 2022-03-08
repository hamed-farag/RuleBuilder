import "./styles.scss";

import Dropdown from "../../../UI/Dropdown";
import Textbox from "../../../UI/Textbox";
import TextArea from "../../../UI/TextArea";

export default function SuccessMessage({ data, onChange }) {
    const { successMessage } = data;
    const { type, title, subtitle, description, suggestion } = successMessage;

    return (
        <article className="scrps-sucsForm">
            <Dropdown
                options={[
                    { key: "hint", value: "hint" },
                    { key: "warning", value: "warning" },
                    { key: "error", value: "error" },
                ]}
                defaultValue={type}
                onChange={(e) => {
                    onChange("type", e.target.value);
                }}
            />
            <Textbox
                label={"Title"}
                value={title}
                onChange={(e) => {
                    onChange("title", e.target.value);
                }}
            />
            <Textbox
                label={"Subtitle"}
                value={subtitle}
                onChange={(e) => {
                    onChange("subtitle", e.target.value);
                }}
            />
            <TextArea
                label={"Description"}
                value={description}
                onChange={(e) => {
                    onChange("description", e.target.value);
                }}
            />
            <TextArea
                label={"Suggestion"}
                value={suggestion}
                onChange={(e) => {
                    onChange("suggestion", e.target.value);
                }}
            />
        </article>
    );
}
