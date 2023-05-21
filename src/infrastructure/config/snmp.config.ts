import { get } from "env-var";

export default class SNMPConfig {
  public static readonly HOST: string = get("SNMP_HOST").required().asString();

  public static readonly PORT: number = get("SNMP_PORT")
    .required()
    .asPortNumber();

  public static readonly TRAP_PORT: number = get("SNMP_TRAP_PORT")
    .default("162")
    .asPortNumber();

  public static readonly START_OID: string = get("SNMP_START_OID")
    .required()
    .asString();

  public static readonly OID_SIZE: number = get("SNMP_OID_SIZE")
    .default("1000")
    .asPortNumber();

  public static readonly COMMUNITY: string = get("SNMP_COMMUNITY")
    .default("public")
    .asString();
}
