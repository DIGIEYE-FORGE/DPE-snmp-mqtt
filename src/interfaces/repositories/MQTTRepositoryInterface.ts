export interface MQTTRepositoryInterface {
  publish(topic: string, payload: string): Promise<void>;
}
