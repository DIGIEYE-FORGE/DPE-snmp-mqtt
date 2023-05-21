import { MQTTRepositoryInterface } from "@application/interfaces/repositories/MQTTRepositoryInterface";
import MQTTConfig from "@config/mqtt.config";
import { MqttClient, connect } from "mqtt";

export class MQTTRepository implements MQTTRepositoryInterface {
  private mqttClient: MqttClient;

  constructor() {
    this.mqttClient = connect(`mqtt://${MQTTConfig.HOST}:${MQTTConfig.PORT}`, {
      username: MQTTConfig.USER,
      password: MQTTConfig.PASSWD,
      clientId: MQTTConfig.CLIENT_ID,
    }); // Replace MQTTConfig with your actual configuration
  }

  publishData(topic: string, payload: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.mqttClient.publish(topic, payload, (error: any) => {
        if (error) {
          reject(new Error(`Failed to publish data to MQTT: ${error.message}`));
        } else {
          resolve();
        }
      });
    });
  }
}
