function updateTransaction(request: {}): {} {
    for (const key in request) {
        if (key.toLowerCase() === 'status') {
            request[key] = 'Success';
            return request;
        }
    }
}
