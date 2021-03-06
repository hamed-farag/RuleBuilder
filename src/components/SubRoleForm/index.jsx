import { useState, useEffect } from "react";

import Textbox from "../UI/Textbox";
import Dropdown from "../UI/Dropdown";

import { constants } from "../../data";

import "./styles.scss";

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
        return <Dropdown options={values} onChange={onChange} defaultValue={selectedValue} />;
    };

    const drawTextbox = (selectedValue, onChange, defaultValue = "") => {
        const currentValue = selectedValue ? selectedValue : defaultValue;
        return <Textbox value={currentValue} onChange={onChange} />;
    };

    const renderProperty = (properties, value, currentEntity) => {
        const selectedProperty = properties.find((property) => property.entity === currentEntity);

        if (selectedProperty) {
            switch (selectedProperty.type) {
                case "select": {
                    return drawDropdown(selectedProperty.values, value, (v) => {
                        setNewRule({ ...newRule, property: v });
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
                    return drawDropdown(selectedValue.values, value, (v) => {
                        setNewRule({ ...newRule, value: v });
                    });
                }

                case "text": {
                    return drawTextbox(
                        selectedValue.value,
                        (v) => {
                            setNewRule({ ...newRule, value: v });
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
        return drawDropdown(entity.values, value, (v) => {
            setNewRule({ ...newRule, entity: v });
        });
    };

    const renderOperator = (operator, value) => {
        switch (operator.type) {
            case "select": {
                return drawDropdown(operator.values, value, (v) => {
                    setNewRule({ ...newRule, operator: v });
                });
            }

            default: {
                return null;
            }
        }
    };

    return (
        <section className="subform">
            {renderEntity(constants.entity, newRule.entity)}
            {renderProperty(constants.properties, newRule.property, newRule.entity)}
            {renderOperator(constants.operator, newRule.operator)}
            {renderValue(constants.values, newRule.value, newRule.property)}
        </section>
    );
}
