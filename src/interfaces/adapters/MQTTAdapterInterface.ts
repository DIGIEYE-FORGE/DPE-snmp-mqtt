export interface MQTTAdapterInterface {
  publishData(topic: string, payload: string): Promise<void>;
}
