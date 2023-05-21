export class SNMPData {
  private oid: string;
  private value: any;

  constructor(oid: string, value: any) {
    this.oid = oid;
    this.value = value;
  }

  getOID(): string {
    return this.oid;
  }

  getValue(): any {
    return this.value;
  }

  toJSON(): any {
    return {
      oid: this.oid,
      value: this.value,
    };
  }
}
