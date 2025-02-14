import {Patient} from "@/lib/patient/model";
import {getBearerToken} from "@/lib/auth/actions";

export async function getPatients(bearerToken?: string) {

    let token = bearerToken;
    if(!bearerToken) {
        token = await getBearerToken();
    }

    const response = await fetch(`${process.env.AZURE_RESOURCE}/Patient`, {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    const fhirResponse = await response.json();

    console.log(fhirResponse.entry);

    /* eslint-disable  @typescript-eslint/no-explicit-any */
    return fhirResponse.entry.reduce((patients: Patient[], entry: any) => {
        const resource = entry.resource;
        const resourceName = resource.name[0];
        const patient: Patient = {
            name: `${resourceName.given.join(' ')} ${resourceName.family}`,
            gender: resource.gender,
            photos: resource.photo,
            contact: resource.contact.map((contactEntry: any) => contactEntry.organization),
            active: resource.active,
            id: resource.id,
            healthStatus: 77,
            points: 2,
            dob: "1941-07-25",
            allergies: "2",
            room: "4D",
        }
        patients.push(patient);
        return patients;
    }, []);

}