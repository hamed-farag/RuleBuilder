import { useState, useEffect } from "react";

import SubRuleForm from "../SubRoleForm";

import Button from "../UI/Button";
import Dropdown from "../UI/Dropdown";

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
                    <Button type="button" value="+ And" onClick={() => handleAddClick("AND")} />
                </section>
            </section>
            <section id="rule-ctr__tail">
                <Dropdown
                    options={[
                        { key: "hint", value: "hint" },
                        { key: "warning", value: "warning" },
                        { key: "error", value: "error" },
                    ]}
                    defaultValue={"hint"}
                    onChange={(e) => {
                        console.info(e.target.value);
                    }}
                />
                <textarea />
            </section>
        </section>
    );
}
