import logger from "./logger";
import { MQTTAdapter } from "@adapters/MQTTAdapter";
const mqttAdapter = new MQTTAdapter();
// Retrieve SNMP data and send it to MQTT
async function retrieveDataAndSend() {
  try {
    const data = "test";

    await mqttAdapter.publishData("test", data);
    logger.info("Data sent to MQTT successfully");
  } catch (error) {
    logger.error("Error occurred:", error);
  }
}

retrieveDataAndSend();
