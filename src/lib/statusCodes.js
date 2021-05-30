const statusCodes = {
    ok: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    unprocessableEntity: 422,
};

Object.freeze(statusCodes);

export {
    statusCodes,
};
