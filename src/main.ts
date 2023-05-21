import { SNMPAdapter } from "@infrastructure/adapters/SNMPAdapter";
import { SNMPRepository } from "@infrastructure/repositories/SNMPRepository";
import { MQTTAdapter } from "@infrastructure/adapters/MQTTAdapter";
import { MQTTRepository } from "@infrastructure/repositories/MQTTRepository";
import { ProcessDataUseCase } from "@application/useCases/ProcessDataUseCase";
import logger from "@infrastructure/logger";

const snmpRepository = new SNMPRepository();
const mqttRepository = new MQTTRepository();
const snmpAdapter = new SNMPAdapter(snmpRepository);
const mqttAdapter = new MQTTAdapter(mqttRepository);

const processDataUseCase = new ProcessDataUseCase(snmpAdapter, mqttAdapter);

// Example usage
const oid = "1.3.6.1.2.1.1.1.0";
const topic = "mqtt/topic";
processDataUseCase
  .execute(oid, topic)
  .then(() => {
    console.log("Data processing completed.");
  })
  .catch((error) => {
    console.error("Error processing data:", error.message);
  });
