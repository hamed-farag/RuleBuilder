// rules data from API
const workflows = [
    {
        name: "workflow 1",
        rules: [
            'plan.labs == "76857"',
            // 'plan.code == "56765" AND diagnosis.code == "N100,R100000" AND provider.speciality == "Abd"',
        ],
    },
];
///////////////////////////////////
// lookups API
const constants = {
    entity: {
        values: [
            { key: "condition", value: "condition" },
            { key: "plan", value: "plan" },
            { key: "patient", value: "patient" },
            { key: "provider", value: "provider" },
        ],
    },
    properties: [
        {
            entity: "condition",
            type: "select",
            values: [
                { key: "primary", value: "primary" },
                { key: "secondary", value: "secondary" },
            ],
        },
        {
            entity: "plan",
            type: "select",
            values: [
                { key: "procedures", value: "procedures" },
                { key: "labs", value: "labs" },
                { key: "radiology", value: "radiology" },
                { key: "drugs", value: "drugs" },
            ],
        },
        {
            entity: "patient",
            type: "select",
            values: [
                { key: "gender", value: "gender" },
                { key: "age", value: "age" },
            ],
        },
        {
            entity: "provider",
            type: "select",
            values: [{ key: "speciality", value: "speciality" }],
        },
    ],
    operator: {
        type: "select",
        values: [
            { key: "equal", value: "==" },
            { key: "greater or equal", value: ">=" },
            { key: "greater than", value: ">" },
            { key: "less than", value: "<" },
            { key: "less than or equal", value: "<=" },
            { key: "not equal", value: "!=" },
        ],
    },
    values: [
        { property: "code", type: "text", value: "" },
        { property: "labs", type: "text", value: "" },
        { property: "primary", type: "text", value: "" },
        {
            property: "gender",
            type: "select",
            values: [
                { key: "male", value: "male" },
                { key: "female", value: "female" },
            ],
        },
        {
            property: "speciality",
            type: "select",
            values: [
                { key: "ENT", value: "ENT" },
                { key: "Oby", value: "Oby" },
            ],
        },
        { property: "age", type: "text", value: "" },
    ],
};

export { workflows, constants };
