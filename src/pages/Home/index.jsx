import React, { useState, useEffect } from "react";

import Workflow from "../../components/WorkFlow";

import { fetchWorkflowsService } from "../../services";

import { rulesMapper } from "../../mappers";

import "./styles.scss";

export default function Home() {
    const [workflows, setWorkflows] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const [data, error] = await fetchWorkflowsService();
        if (data) {
            setWorkflows(data);
        }

        if (error) {
            alert("error");
        }
    };

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
