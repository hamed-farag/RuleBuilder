import { useState, useEffect } from "react";

import SubRuleForm from "../SubRoleForm";

import Button from "../UI/Button";

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
        <section>
            <section>
                <span>If</span>
                <section>{renderSubRules(subRules)}</section>
                <Button type="button" value="+ And" onClick={() => handleAddClick("AND")} />
            </section>
            <hr />
        </section>
    );
}
