import { useState, useEffect } from "react";

import SubRuleForm from "../SubRoleForm";

import Button from "../UI/Button";

import SuccessMessage from "./components/SuccessMessage";

import { constants } from "../../data";

import { generateSubRuleMapper } from "../../mappers";

import "./styles.scss";

export default function Rule({ data }) {
    const { rule } = data;
    const [subRules, setSubRules] = useState([]);
    const [successMessage, setSuccessMessage] = useState({});

    useEffect(() => {
        setSubRules(rule.subRules);
        setSuccessMessage(rule.successMessage);
    }, [rule]);

    const handleAddClick = (operator) => {
        const newSubRule = generateSubRuleMapper(constants);
        setSubRules([...subRules, newSubRule]);
    };

    const renderSubRules = (rule) => {
        return rule.map((subRule, index) => {
            return (
                <>
                    {index !== 0 ? <span>AND</span> : null}
                    <SubRuleForm data={{ subRule }} />
                </>
            );
        });
    };

    const handleSuccessMessageChange = (name, value) => {
        setSuccessMessage({ ...successMessage, [name]: value });
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
                <SuccessMessage data={{ successMessage }} onChange={handleSuccessMessageChange} />
            </section>
        </section>
    );
}
