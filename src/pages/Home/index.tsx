import { useState, useEffect, FC } from "react";

import { workflow } from "../../data";

import RuleForm from "../../components/RuleForm";

import { ruleType } from "../../types/rule";

const Home: FC<ruleType> = () => {
    const [rules, setRules] = useState<Array<ruleType>>([]);

    useEffect(() => {
        setRules(workflow.rules);
    }, []);

    const handleAddClick = (operator: string) => {
        console.info(operator);
        // setRules([
        //   ...rules,
        //   {
        //     entity: null,
        //     property: null,
        //     operator: null,
        //     value: null,
        //   },
        // ]);
    };

    const renderRules = (collection: Array<ruleType>) => {
        return collection.map((rule) => {
            return <RuleForm data={{ rule }} />;
        });
    };

    return (
        <section>
            <section>If</section>
            <section>{renderRules(rules)}</section>
            <hr />
            <input type="button" value="+ And" onClick={() => handleAddClick("and")} />
            <input type="button" value="+ Or" onClick={() => handleAddClick("or")} />
        </section>
    );
};

export default Home;
