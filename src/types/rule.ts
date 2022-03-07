export type workFlowType = {
    name: string;
    rules: Array<ruleType>;
};

export type ruleType = {
    entity: string;
    property: string;
    operator: string;
    value: string;
};

export type itemType = {
    key: string;
    value: string;
};

export type operatorType = {
    type: string;
    values: Array<itemType>;
};

export type entityType = {
    values: Array<itemType>;
};

export type propertyType = {
    entity: string;
    type: string;
    values: Array<itemType>;
};

export type valueType = {
    property: string;
    type: string;
    value?: string;
    values?: Array<itemType>;
};

export type constantsType = {
    entity: entityType;
    properties: Array<propertyType>;
    operator: operatorType;
    values: Array<valueType>;
};
