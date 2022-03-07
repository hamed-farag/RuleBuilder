import asyncer from "../helpers/asyncer";

import { fetchWorkflows } from "../apis";
import { workflowMapper } from "../mappers";

export async function fetchWorkflowsService() {
    const [response, error] = await asyncer(fetchWorkflows());

    if (response) {
        return [workflowMapper(response.data), undefined];
    } else {
        return [undefined, error];
    }
}
