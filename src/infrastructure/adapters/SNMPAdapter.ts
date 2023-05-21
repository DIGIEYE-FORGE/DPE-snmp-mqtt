import { SNMPAdapterInterface } from "../../interfaces/adapters/SNMPAdapterInterface";
import { SNMPData } from "../../domain/models/SNMPData";
import { SNMPRepositoryInterface } from "../../application/interfaces/repositories/SNMPRepositoryInterface";

export class SNMPAdapter implements SNMPAdapterInterface {
  constructor(private snmpRepository: SNMPRepositoryInterface) {}

  async fetchData(oid: string): Promise<SNMPData> {
    return this.snmpRepository.fetchData(oid);
  }
}
