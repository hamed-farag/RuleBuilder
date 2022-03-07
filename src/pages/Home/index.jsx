import React from "react";

import Workflow from "../../components/WorkFlow";

import { workflows } from "../../data";

import { rulesMapper } from "../../mapper";

export default function Home() {
    const renderWorkflows = () => {
        return workflows.map((workflow) => {
            const workFlowData = {
                name: workflow.name,
                rules: rulesMapper(workflow.rules),
            };
            return <Workflow data={{ workflow: workFlowData }} />;
        });
    };

    return <section>{renderWorkflows()}</section>;
}
