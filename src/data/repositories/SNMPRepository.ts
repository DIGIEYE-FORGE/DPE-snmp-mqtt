import SNMPConfig from "./../../infrastructure/config/SNMPConfig";
const snmp = require("net-snmp");

export class SNMPRepository {
  private snmpSession: any;
  constructor() {
    this.snmpSession = snmp.createSession(
      SNMPConfig.HOST,
      SNMPConfig.COMMUNITY,
      {
        port: SNMPConfig.PORT,
      }
    );
  }

  async getData(): Promise<any> {
    try {
      await this.snmpSession.walk(SNMPConfig.START_OID, SNMPConfig.OID_SIZE);
    } catch (error: any) {
      throw new Error(`Failed to publish MQTT data: ${error.message}`);
    }
  }
}
