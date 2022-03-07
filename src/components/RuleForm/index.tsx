import React, { useState, useEffect, FC } from "react";

import { constants } from "../../data";

import {
    ruleType,
    operatorType,
    propertyType,
    valueType,
    itemType,
    entityType,
} from "../../types/rule";

type RuleFormProps = {
    data: {
        rule: {
            entity: string;
            property: string;
            operator: string;
            value: string;
        };
    };
};

const RuleForm: FC<RuleFormProps> = ({ data }) => {
    const { rule } = data;

    const [newRule, setNewRule] = useState<ruleType>({
        entity: null,
        property: null,
        operator: null,
        value: null,
    });

    useEffect(() => {
        if (rule) {
            setNewRule(rule);
        }
    }, [rule]);

    const drawDropdown = (
        values: Array<itemType>,
        selectedValue: string,
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    ) => {
        return (
            <select onChange={onChange}>
                {values.map((item) => {
                    if (selectedValue && item.value === selectedValue) {
                        return (
                            <option value={item.value} selected>
                                {item.key}
                            </option>
                        );
                    }
                    return <option value={item.value}>{item.key}</option>;
                })}
            </select>
        );
    };

    const drawTextbox = (
        value: string,
        selectedValue: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    ) => {
        const currentValue = selectedValue ? selectedValue : value;
        return <input type="text" value={currentValue} onChange={onChange} />;
    };

    const renderProperty = (
        properties: Array<propertyType>,
        value: string,
        currentEntity: string
    ) => {
        const selectedProperty = properties.find((property) => property.entity === currentEntity);

        if (selectedProperty) {
            switch (selectedProperty.type) {
                case "select": {
                    return drawDropdown(selectedProperty.values, value, (e) => {
                        setNewRule({ ...newRule, property: e.target.value });
                    });
                }

                default: {
                    return null;
                }
            }
        }

        return null;
    };

    const renderValue = (values: Array<valueType>, value: string, currentProperty: string) => {
        const selectedValue = values.find((property) => property.property === currentProperty); // valueType

        if (selectedValue) {
            switch (selectedValue.type) {
                case "select": {
                    return drawDropdown(selectedValue.values, value, (e) => {
                        // [itemType]
                        setNewRule({ ...newRule, value: e.target.value });
                    });
                }

                case "text": {
                    return drawTextbox(selectedValue.value, value, (e) => {
                        // [itemType]
                        setNewRule({ ...newRule, value: e.target.value });
                    });
                }

                default:
                    return null;
            }
        }

        return null;
    };

    const renderEntity = (entity: entityType, value: string) => {
        return drawDropdown(entity.values, value, (e) => {
            setNewRule({ ...newRule, entity: e.target.value });
        });
    };

    const renderOperator = (operator: operatorType, value: string) => {
        switch (operator.type) {
            case "select": {
                return drawDropdown(operator.values, value, (e) => {
                    setNewRule({ ...newRule, operator: e.target.value });
                });
            }

            default: {
                return null;
            }
        }
    };

    return (
        <section>
            {renderEntity(constants.entity, newRule.entity)}
            {renderProperty(constants.properties, newRule.property, newRule.entity)}
            {renderOperator(constants.operator, newRule.operator)}
            {renderValue(constants.values, newRule.value, newRule.property)}
        </section>
    );
};

export default RuleForm;
