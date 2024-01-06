export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserCredential {
    email: string;
    password: string;
}

export interface TripData {
    userId: number;
    tripId: number;
    location: string;
    dateTime: string
}

export interface Weather {
    userId: number;
    tripId: number;
    location: string;
    dateTime: string;
    weather: string[];
}

export interface tripID {
    userID: string,
    tripID: string
}