import { useState, useEffect } from "react";

import SubRuleForm from "../SubRoleForm";

import { constants } from "../../data";

export default function Rule({ data }) {
    const { rule } = data;
    const [subRules, setSubRules] = useState([]);

    useEffect(() => {
        setSubRules(rule);
    }, [rule]);

    const handleAddClick = (operator) => {
        const defaultEntity = constants.entity.values[0].value;
        const defaultProperty = constants.properties.find((property) => property.entity === defaultEntity);
        const defaultValue = constants.values.find((value) => value.property === defaultProperty.values[0].value);
        const defaultOperator = constants.operator.values[0].value;

        const newSubRule = {
            entity: defaultEntity,
            property: defaultProperty.values[0].value,
            operator: defaultOperator,
            value: defaultValue.value,
        };

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
                <input type="button" value="+ And" onClick={() => handleAddClick("AND")} />
            </section>
            <hr />
        </section>
    );
}
