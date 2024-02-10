module.exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    // put events to eventbridge

    return {
        statusCode: 200,
        body: JSON.stringify("code is working")
    };
};