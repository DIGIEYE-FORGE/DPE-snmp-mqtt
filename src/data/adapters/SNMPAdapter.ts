import { SNMPRepository } from "./../repositories/SNMPRepository";

export class SNMPAdapter {
  private mqttRepository: SNMPRepository;
  constructor() {
    this.mqttRepository = new SNMPRepository();
  }

  getData(): Promise<void> {
    return this.mqttRepository.getData();
  }
}
