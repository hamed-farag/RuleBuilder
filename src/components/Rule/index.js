import { useState, useEffect } from "react";

import SubRuleForm from "../SubRoleForm";

export default function Rule({ data }) {
    const { rule } = data;
    const [subRules, setSubRules] = useState([]);

    useEffect(() => {
        setSubRules(rule);
    }, [rule]);

    const handleAddClick = (operator) => {
        setSubRules([
            ...subRules,
            {
                entity: null,
                property: null,
                operator: null,
                value: null,
            },
        ]);
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
                <section>{renderSubRules(rule)}</section>
                <input type="button" value="+ And" onClick={() => handleAddClick("AND")} />
            </section>
            <hr />
        </section>
    );
}
