import * as snmp from "net-snmp";
import { SNMPRepositoryInterface } from "@interfaces/repositories/SNMPRepositoryInterface";
import { SNMPData } from "@domain/models/SNMPData";

export class SNMPRepository implements SNMPRepositoryInterface {
  private snmpSession: any; // SNMP session instance

  constructor(snmpSession: any) {
    this.snmpSession = snmpSession;
  }

  async fetchData(oid: string): Promise<SNMPData> {
    return new Promise((resolve, reject) => {
      const request = this.snmpSession.get(
        { oid },
        (error: any, varbinds: Array<SNMPData>) => {
          if (error) {
            reject(new Error(`Failed to fetch SNMP data: ${error.message}`));
          } else {
            const snmpData = new SNMPData(
              varbinds[0].getOID(),
              varbinds[0].getValue()
            );
            resolve(snmpData);
          }
        }
      );

      this.snmpSession.trap(request);
    });
  }
}
