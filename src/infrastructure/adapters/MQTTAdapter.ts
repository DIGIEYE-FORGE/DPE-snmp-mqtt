import { MQTTAdapterInterface } from "../../interfaces/adapters/MQTTAdapterInterface";
import { MQTTRepositoryInterface } from "../../application/interfaces/repositories/MQTTRepositoryInterface";

export class MQTTAdapter implements MQTTAdapterInterface {
  constructor(private mqttRepository: MQTTRepositoryInterface) {}

  publishData(topic: string, payload: string): Promise<void> {
    return this.mqttRepository.publishData(topic, payload);
  }
}
