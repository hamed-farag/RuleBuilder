import { useState, useEffect } from "react";
import { constants } from "../../data";

export default function SubRoleForm({ data }) {
    const { subRule: rule } = data;

    const [newRule, setNewRule] = useState({
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

    const drawDropdown = (values, selectedValue, onChange) => {
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

    const drawTextbox = (selectedValue, onChange, defaultValue = "") => {
        const currentValue = selectedValue ? selectedValue : defaultValue;
        return <input type="text" value={currentValue} onChange={onChange} />;
    };

    const renderProperty = (properties, value, currentEntity) => {
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

    const renderValue = (values, value, currentProperty) => {
        const selectedValue = values.find((property) => property.property === currentProperty);
        if (selectedValue) {
            switch (selectedValue.type) {
                case "select": {
                    return drawDropdown(selectedValue.values, value, (e) => {
                        setNewRule({ ...newRule, value: e.target.value });
                    });
                }

                case "text": {
                    return drawTextbox(
                        selectedValue.value,
                        (e) => {
                            setNewRule({ ...newRule, value: e.target.value });
                        },
                        value
                    );
                }

                default:
                    return null;
            }
        }

        return null;
    };

    const renderEntity = (entity, value) => {
        return drawDropdown(entity.values, value, (e) => {
            setNewRule({ ...newRule, entity: e.target.value });
        });
    };

    const renderOperator = (operator, value) => {
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
}
