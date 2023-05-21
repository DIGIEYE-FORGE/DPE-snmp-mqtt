import * as mqtt from "mqtt";
import MQTTConfig from "@config/mqtt.config";

export class MQTTGateway {
  private client: mqtt.MqttClient;

  constructor() {
    this.client = mqtt.connect(`mqtt://${MQTTConfig.HOST}:${MQTTConfig.PORT}`, {
      username: MQTTConfig.USER,
      password: MQTTConfig.PASSWD,
      clientId: MQTTConfig.CLIENT_ID,
    });
  }

  publishData(data: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(MQTTConfig.TOPIC, data.toString(), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  closeClient() {
    this.client.end();
  }
}
