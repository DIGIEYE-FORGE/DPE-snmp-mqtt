import * as snmp from "net-snmp";
import SNMPConfig from "@config/snmp.config";

// SNMP gateway
export const SNMPGateway = {
  getData: (): Promise<any> =>
    new Promise((resolve, reject) => {
      const session = snmp.createSession(
        SNMPConfig.HOST,
        SNMPConfig.COMMUNITY,
        {
          port: SNMPConfig.PORT,
        }
      );
      session.walk(
        SNMPConfig.START_OID,
        SNMPConfig.OID_SIZE,
        (data: any) => {
          resolve(data[0]);
        },
        (error: any) => {
          if (error) {
            reject(error);
          }
          session.close();
        }
      );
    }),
};
