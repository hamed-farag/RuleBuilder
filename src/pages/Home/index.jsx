import React, { useState, useEffect } from "react";

import { workflow } from "../../data";

import RuleForm from "../../components/RuleForm";

export default function Home() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    setRules(workflow.rules);
  }, []);

  const handleAddClick = (operator) => {
    console.info(operator);
    setRules([
      ...rules,
      {
        entity: null,
        property: null,
        operator: null,
        value: null,
      },
    ]);
  };

  const renderRules = (collection) => {
    return collection.map((rule) => {
      return <RuleForm data={{ rule }} />;
    });
  };

  return (
    <section>
      <section>If</section>
      <section>{renderRules(rules)}</section>
      <hr />
      <input
        type="button"
        value="+ And"
        onClick={() => handleAddClick("and")}
      />
      <input type="button" value="+ Or" onClick={() => handleAddClick("or")} />
    </section>
  );
}
