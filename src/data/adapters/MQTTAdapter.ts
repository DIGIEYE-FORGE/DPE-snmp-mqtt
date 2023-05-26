import { MQTTRepository } from "./../repositories/MQTTRepository";

export class MQTTAdapter {
  private mqttRepository: MQTTRepository;
  constructor() {
    this.mqttRepository = new MQTTRepository();
  }

  publishData(topic: string, payload: string): Promise<void> {
    return this.mqttRepository.publish(topic, payload);
  }
}
