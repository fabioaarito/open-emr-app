export interface Patient {
    id: string;
    active: boolean;
    gender: string;
    name: string;
    photos: PatientPhoto[];
    contact: PatientContact[];
    healthStatus: number
    dob: string;
    allergies?: string;
    room?: string;
    points?: number;
}

export interface PatientContact {
    organization: PatientOrganization;
}

export interface PatientOrganization {
    name: string;
    reference: string;
}

export interface PatientPhoto {
    contentType: string;
    data: string
}