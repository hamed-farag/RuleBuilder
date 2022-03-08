import { useState, useEffect } from "react";

import SubRuleForm from "../SubRoleForm";

import Button from "../UI/Button";
import CustomDropdown from "../UI/Dropdown";

import { constants } from "../../data";

import { generateSubRuleMapper } from "../../mapper";

import "./styles.scss";

export default function Rule({ data }) {
    const { rule } = data;
    const [subRules, setSubRules] = useState([]);

    useEffect(() => {
        setSubRules(rule);
    }, [rule]);

    const handleAddClick = (operator) => {
        const newSubRule = generateSubRuleMapper(constants);
        setSubRules([...subRules, newSubRule]);
    };

    const renderSubRules = (rule) => {
        return rule.map((subRule) => {
            return <SubRuleForm data={{ subRule }} />;
        });
    };

    return (
        <section id="rule-ctr">
            <section id="rule-ctr__head">
                <span>If</span>
                <section id="rule-ctr__body">
                    {renderSubRules(subRules)}
                    <Button variant="secondary" value="+ And" onClick={() => handleAddClick("AND")} />
                </section>
            </section>
            <section id="rule-ctr__tail">
                <CustomDropdown
                    options={[
                        { key: "hint", value: "hint" },
                        { key: "warning", value: "warning" },
                        { key: "error", value: "error" },
                    ]}
                    defaultValue={"hint"}
                    onChange={(v) => {
                        console.warn(v);
                    }}
                />
                <textarea />
            </section>
        </section>
    );
}
