
export function handleResponse (response) {
    if (response.message?.response) {
        if (response.message.response.status === 404) {
            return {
                text: response.message.message,
                title: response.message.response.statusText,
                severity: "error"
            };
        }
        return {
            text: response.message.response.data,
            title: response.message.response.statusText,
            severity: "warning"
        };
    } else {
        if ((response.status === 200 || response.status === 201) && response.data?.response) {
            return {
                text: response.data,
                title: response.statusText,
                severity: "success"
            };
        }
        return {
            text: response.message.message,
            title: response.message.code,
            severity: "error"
        };
    }
}
