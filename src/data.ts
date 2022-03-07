// rules data from API
const workflow = {
    name: "workflow 1",
    rules: [
        {
            entity: "cpt",
            property: "code",
            operator: "equal",
            value: "666",
        },
        // {
        //   entity: "patient",
        //   property: "gender",
        //   operator: "greatOrEqual",
        //   value: "male",
        // },
        // {
        //   entity: "patient",
        //   property: "age",
        //   operator: "greatOrEqual",
        //   value: "50",
        // },
    ],
};
///////////////////////////////////
// lookups API
const constants = {
    entity: {
        values: [
            { key: "cpt", value: "cpt" },
            { key: "patient", value: "patient" },
        ],
    },
    properties: [
        {
            entity: "cpt",
            type: "select",
            values: [
                { key: "code", value: "code" },
                { key: "cost", value: "cost" },
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
    ],
    operator: {
        type: "select",
        values: [
            { key: "equal", value: "equal" },
            { key: "great or equal", value: "greatOrEqual" },
        ],
    },
    values: [
        { property: "code", type: "text", value: "" },
        {
            property: "gender",
            type: "select",
            values: [
                { key: "male", value: "male" },
                { key: "female", value: "female" },
            ],
        },
        { property: "age", type: "text", value: "" },
    ],
};

export { workflow, constants };
