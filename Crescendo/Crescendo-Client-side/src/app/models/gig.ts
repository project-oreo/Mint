import { Promoter } from './promoter';

export class Gig {
    id: number;
    gigName: string;
    startTime: any;
    location: string;
    promoter: Promoter;
    Security: boolean;
    closed: boolean;
    maxCapacity: number;
    websiteUrl: string;

    constructor(id: number, gigName: string, startTime: any, location: string, promoter: Promoter,
                Security: boolean, closed: boolean, maxCapacity: number, websiteUrl: string) {
            this.id = id;
            this.gigName = gigName;
            this.startTime = startTime;
            this.location = location;
            this.promoter = promoter;
            this.Security = Security;
            this.closed = closed;
            this.maxCapacity = maxCapacity;
            this.websiteUrl = websiteUrl;
        }
}
