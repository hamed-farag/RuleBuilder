import { splitStringUsingAndOrOperator, splitStringUsingConditionalOperators, splitString } from "../utils";

function rulesMapper(rules) {
    return rules.map((rule) => {
        const subRulesSplitted = splitStringUsingAndOrOperator(rule.expression);
        let successMessage = {};

        const subRules = subRulesSplitted.map((subRule) => {
            const operatorStartPosition = subRule.search(/==|>=|<=|<|>|!=\b/);
            const operatorWithRightSideSubRule = subRule.substring(operatorStartPosition);
            const indexOfFirstSpaceAfterTheOperator = operatorWithRightSideSubRule.search(" ");
            const operator = operatorWithRightSideSubRule.substring(0, indexOfFirstSpaceAfterTheOperator); // 1 -> operator

            const subRuleSides = splitStringUsingConditionalOperators(subRule);
            const subRuleLeftSide = subRuleSides[0].trim();
            const subRUleRightSide = subRuleSides[1].trim(); // 2 -> value

            const subRuleLeftSideAsObject = splitString(subRuleLeftSide, "."); // 3,4 -> entity & property

            return {
                entity: subRuleLeftSideAsObject[0],
                property: subRuleLeftSideAsObject[1],
                operator: operator,
                value: subRUleRightSide,
            };
        });

        try {
            successMessage = JSON.parse(rule.successMessage);
        } catch (e) {
            console.log("invalid json: (successEvent not a json object!)");
        }

        return {
            subRules,
            successMessage: successMessage,
        };
    });
}

function workflowMapper(workflows) {
    return workflows.map((workflow) => {
        return {
            name: workflow.workflowName,
            rules: workflow.rules.map((rule) => {
                return { expression: rule.expression, successMessage: rule.successEvent };
            }),
        };
    });
}

function generateSubRuleMapper(constants) {
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

    return newSubRule;
}

export { rulesMapper, generateSubRuleMapper, workflowMapper };
