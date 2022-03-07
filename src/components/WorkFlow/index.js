import React, { useState, useEffect } from "react";

import Rule from "../Rule";

import { constants } from "../../data";
import { generateSubRuleMapper } from "../../mapper";

export default function Workflow({ data }) {
    const { workflow } = data;
    const [rules, setRules] = useState([]);

    useEffect(() => {
        setRules(workflow.rules);
    }, [workflow]);

    const handleAddRule = (e) => {
        setRules([...rules, [generateSubRuleMapper(constants)]]);
    };

    return (
        <section>
            <h2>{workflow && workflow.name}</h2>
            <section>
                {rules.map((rule) => {
                    return <Rule data={{ rule }}></Rule>;
                })}
            </section>

            {/* new Whole Section */}
            <input type="button" value="Add New Rule" onClick={handleAddRule} />
            <hr />
            <hr />
        </section>
    );
}
