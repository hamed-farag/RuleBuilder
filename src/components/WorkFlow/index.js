import React, { useState, useEffect } from "react";

import Rule from "../Rule";
import Button from "../UI/Button";

import { constants } from "../../data";
import { generateSubRuleMapper } from "../../mapper";

import "./styles.scss";

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
        <section className="scrps-workflow">
            <h2>{workflow && workflow.name}</h2>
            <section className="scrps-rules scrps-column">
                {rules.map((rule) => {
                    return <Rule data={{ rule }}></Rule>;
                })}
            </section>

            {/* new Whole Section */}
            <Button type="button" value="Add New Rule" onClick={handleAddRule} />
            <hr />
            <hr />
        </section>
    );
}
