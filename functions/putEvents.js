const EventBridge = require("aws-sdk/clients/eventbridge");
const EVENT_BUS_NAME = process.env.eventBusName;

let eventBridge = new EventBridge();

module.exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    // put events to eventbridge
    let event = {
        EventBusName: EVENT_BUS_NAME,
        Detail: JSON.stringify({
            vehicleNo: body.vehicleNo,
            NIC: body.nic
        }),
        Source: "fuel-app",
        DetailType: "user-signup"
    };

    try {
        let output = await eventBridge.putEvents({Entries: []}).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(output)
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify(error.message)
        };
    }
};