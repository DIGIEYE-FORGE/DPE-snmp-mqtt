import { SNMPData } from "../../domain/models/SNMPData";

export interface SNMPAdapterInterface {
  fetchData(oid: string): Promise<SNMPData>;
}
