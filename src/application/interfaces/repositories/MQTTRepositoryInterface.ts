export interface MQTTRepositoryInterface {
  publishData(topic: string, data: any): Promise<void>;
}
