module.exports.handler = async (event) => {
    let records = event.Records;
    let batchItemFailures = [];

    if (records.length > 0) {
        for (const record of records) {
            try {
                const parsedBody = JSON.parse(record.body);
                console.log("processing vehicle details", record.body);
                console.log("processing is succesfull", record.messageId);
            } catch (error) {
                batchItemFailures.push({
                    itemIdentifier: record.messageId
                });
            }
        }
    }

    return {
        batchItemFailures,
    }
};