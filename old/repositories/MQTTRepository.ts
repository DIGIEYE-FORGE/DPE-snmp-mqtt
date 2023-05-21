import { MqttClient } from "mqtt";
import { MQTTRepositoryInterface } from "@interfaces/repositories/MQTTRepositoryInterface";

export class MQTTRepository implements MQTTRepositoryInterface {
  private mqttClient: MqttClient;

  constructor(mqttClient: MqttClient) {
    this.mqttClient = mqttClient;
  }

  async publishData(topic: string, data: any): Promise<void> {
    try {
      const payload = JSON.stringify(data);
      await this.mqttClient.publish(topic, payload);
    } catch (error: any) {
      // Handle any errors or throw custom exceptions
      throw new Error(`Failed to publish MQTT data: ${error.message}`);
    }
  }
}
