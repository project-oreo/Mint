import { Gig } from './gig';

export class Band {
    id: number;
    email: string;
    bandName: string;
    genre: string;
    debutDate: Date;
    bio: string;
    socialMedia: string;
    hourlyRate: number;
    imageURL: string;
    hashedPassword: string;
    gigs: Array<Gig>;
    constructor(id: number, email: string, bandName: string, genre: string, debutDate: Date, bio: string,
                socialMedia: string, hourlyRate: number, imageURL: string, hashedPassword: string, gigs: Array<Gig>) {
            this.id = id;
            this.email = email;
            this.bandName = bandName;
            this.genre = genre;
            this. debutDate = debutDate;
            this.bio = bio;
            this.socialMedia = socialMedia;
            this.hourlyRate = hourlyRate;
            this.imageURL = imageURL;
            this.hashedPassword = hashedPassword;
            this.gigs = gigs;
        }
}
