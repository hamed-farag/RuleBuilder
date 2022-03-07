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
            { key: "diagnosis", value: "diagnosis" },
            { key: "plan", value: "plan" },
            { key: "patient", value: "patient" },
            { key: "provider", value: "provider" },
        ],
    },
    properties: [
        {
            entity: "diagnosis",
            type: "select",
            values: [
                { key: "code", value: "code" }
            ],
        },
        {
            entity: "plan",
            type: "select",
            values: [
                { key: "procedure", value: "procedure" },
                { key: "lab", value: "lab" },
                { key: "radiology", value: "radiology" },
                { key: "medication", value: "medication" },
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
            { key: "great or equal", value: "<=" },
        ],
    },
    values: [
        { property: "code", type: "text", value: "" },
        { property: "lab", type: "text", value: "" },
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
                { key: "Endocrinology", value: "Endocrinology" },
                { key: "Oby", value: "Oby" },
                { key: "ENT", value: "ENT" }
            ],
        },
        { property: "age", type: "text", value: "" },
    ],
};

export { workflows, constants };
