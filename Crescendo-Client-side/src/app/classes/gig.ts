export class Gig {
    id: number;
    security: boolean;
    closed: boolean;
    gigName: string;
    location: string;
    maxCapacity: number;
    startTime: Date;
// tslint:disable-next-line: variable-name
    promoter_id: number;

    constructor(id: number, security: boolean, closed: boolean, gigName: string,
// tslint:disable-next-line: variable-name
                location: string, maxCapacity: number, startTime: Date, promoter_id: number) {
        this.id = id;
        this.security = security;
        this.closed = closed;
        this.gigName = gigName;
        this.location = location;
        this.maxCapacity = maxCapacity;
        this.startTime = startTime;
        this.promoter_id = promoter_id;
  }

}
