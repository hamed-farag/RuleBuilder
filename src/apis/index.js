import requester from "../helpers/requester";

import apiUrls from "../apiUrl";

export function fetchWorkflows() {
    return requester({
        method: "GET",
        url: apiUrls.workflowsUrl,
    });
}
