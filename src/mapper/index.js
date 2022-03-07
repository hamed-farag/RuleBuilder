import { splitStringUsingAndOrOperator, splitStringUsingConditionalOperators, splitString } from "../utils";

function rulesMapper(rules) {
    return rules.map((rule) => {
        const subRules = splitStringUsingAndOrOperator(rule);

        return subRules.map((subRule) => {
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
    });
}

export { rulesMapper };
