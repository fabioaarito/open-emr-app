import {Patient} from "@/lib/patient/model";

export async function getPatients(bearerToken: string) {

    const response = await fetch(`${process.env.AZURE_RESOURCE}/Patient`, {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${bearerToken}`,
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
        }
        patients.push(patient);
        return patients;
    }, []);

}