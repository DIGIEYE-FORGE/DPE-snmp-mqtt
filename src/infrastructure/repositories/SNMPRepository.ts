import { SNMPRepositoryInterface } from "../../application/interfaces/repositories/SNMPRepositoryInterface";
import * as snmp from "net-snmp";
import SNMPConfig from "@config/snmp.config";
import { SNMPData } from "@domain/models/SNMPData";

export class SNMPRepository implements SNMPRepositoryInterface {
  private snmpSession: any;

  constructor() {
    this.snmpSession = snmp.createSession(SNMPConfig); // Replace SNMPConfig with your actual configuration
  }

  async fetchData(oid: string): Promise<SNMPData> {
    return new Promise((resolve, reject) => {
      this.snmpSession.get({ oid }, (error: any, varbinds: any) => {
        if (error) {
          reject(new Error(`Failed to fetch SNMP data: ${error.message}`));
        } else {
          const snmpData = new SNMPData(varbinds[0].oid, varbinds[0].value);
          resolve(snmpData);
        }
      });
    });
  }
}
