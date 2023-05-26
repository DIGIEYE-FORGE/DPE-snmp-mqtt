import MQTTConfig from "./../../infrastructure/config/MQTTConfig";
import { connect, MqttClient } from "mqtt";

export class MQTTRepository {
  private mqttClient: MqttClient;
  constructor() {
    this.mqttClient = connect(`mqtt://${MQTTConfig.HOST}:${MQTTConfig.PORT}`, {
      username: MQTTConfig.USER,
      password: MQTTConfig.PASSWD,
      clientId: MQTTConfig.CLIENT_ID,
    });
  }

  async publish(topic: string, data: any): Promise<void> {
    try {
      const payload = JSON.stringify(data);
      await this.mqttClient.publish(topic, payload);
    } catch (error: any) {
      throw new Error(`Failed to publish MQTT data: ${error.message}`);
    }
  }
}
