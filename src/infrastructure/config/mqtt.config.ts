import { get } from "env-var";

export default class MQTTConfig {
  public static readonly HOST: string = get("MQTT_HOST").required().asString();

  public static readonly PORT: number = get("MQTT_PORT")
    .default("1883")
    .asPortNumber();

  public static readonly USER: string | undefined = get("MQTT_USER").asString();

  public static readonly PASSWD: string | undefined =
    get("MQTT_PASSWD").asString();

  public static readonly CLIENT_ID: string = get("MQTT_CLIENT_ID")
    .required()
    .asString();

  public static readonly TOPIC: string = get("MQTT_TOPIC")
    .required()
    .asString();
}
