import { SNMPData } from "../../domain/models/SNMPData";

export interface SNMPRepositoryInterface {
  fetchData(oid: string): Promise<SNMPData>;
}
