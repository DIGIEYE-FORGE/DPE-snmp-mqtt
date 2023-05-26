import { config } from "dotenv";
config();

import logger from "./logger";
import { MQTTAdapter } from "./data/adapters/MQTTAdapter";
import { SNMPAdapter } from "./data/adapters/SNMPAdapter";
const mqttAdapter = new MQTTAdapter();
const snmpAdapter = new SNMPAdapter();
// Retrieve SNMP data and send it to MQTT
async function retrieveDataAndSend() {
  try {
    const data = await snmpAdapter.getData();
    console.log(data);

    await mqttAdapter.publishData("testtest", data);
    logger.info("Data sent to MQTT successfully");
  } catch (error) {
    logger.error("Error occurred:", error);
  }
}

retrieveDataAndSend();
