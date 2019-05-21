import { Gig } from './gig';

export class Promoter {
    id: number;
    email: string;
    businessName: string;
    website: any;
    gigs: Array<Gig>;


    constructor(id: number, email: string, businessName: string, website: any, gigs: Array<Gig>) {
            this.id = id;
            this.email = email;
            this.businessName = businessName;
            this.website = website;
            this.gigs = gigs;
        }
}
