const { Session } = require("net-snmp");

export function getDataFromSNMP(
  host: string,
  community: string,
  oid: string
): Promise<any> {
  return new Promise((resolve, reject) => {
    const session = new Session({ host, community });

    session.get({ oid }, (error: any, varbinds: any) => {
      if (error) {
        reject(error);
      } else {
        const result = varbinds[0].value;
        resolve(result);
      }

      session.close();
    });
  });
}
