export interface ProcessDataUseCaseInterface {
  execute(oid: string, topic: string): Promise<void>;
}
