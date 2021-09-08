module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    context.log("Request Body: " + JSON.stringify(req.body))

    context.res = {
        // status: 200, /* Defaults to 200 */
        roles: ["Red", "Gold"]
    };
}