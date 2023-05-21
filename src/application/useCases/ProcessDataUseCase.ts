import { SNMPRepositoryInterface } from "@interfaces/repositories/SNMPRepositoryInterface";
import { MQTTRepositoryInterface } from "@interfaces/repositories/MQTTRepositoryInterface";
import { ProcessDataUseCaseInterface } from "@interfaces/useCases/ProcessDataUseCaseInterface";
import { SNMPData } from "@domain/models/SNMPData";

export class ProcessDataUseCase implements ProcessDataUseCaseInterface {
  private snmpRepository: SNMPRepositoryInterface;
  private mqttRepository: MQTTRepositoryInterface;

  constructor(
    snmpRepository: SNMPRepositoryInterface,
    mqttRepository: MQTTRepositoryInterface
  ) {
    this.snmpRepository = snmpRepository;
    this.mqttRepository = mqttRepository;
  }

  async execute(oid: string, mqttTopic: string): Promise<void> {
    try {
      const snmpData: SNMPData = await this.snmpRepository.fetchData(oid);
      const payload: string = JSON.stringify(snmpData);
      await this.mqttRepository.publishData(mqttTopic, payload);
    } catch (error: any) {
      // Handle any errors or throw custom exceptions
      throw new Error(`Failed to process data: ${error.message}`);
    }
  }
}
