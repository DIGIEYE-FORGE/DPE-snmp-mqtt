import { config } from "dotenv";
config();

import logger from "./logger";
import { MQTTAdapter } from "./data/adapters/MQTTAdapter";
const mqttAdapter = new MQTTAdapter();
// Retrieve SNMP data and send it to MQTT
async function retrieveDataAndSend() {
  try {
    const data = "test";

    await mqttAdapter.publishData("testtest", data);
    logger.info("Data sent to MQTT successfully");
  } catch (error) {
    logger.error("Error occurred:", error);
  }
}

retrieveDataAndSend();
