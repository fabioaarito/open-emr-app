import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import PatientList from "@/app/components/patient-list";
import {getPatients} from "@/lib/patient/actions";

async function getPatientsData() {
    return getPatients();
}
export default async function Home() {

    const patients = await getPatientsData();

    console.log(JSON.stringify(patients));
    return (
        <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-4 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 sm:items-start">
              <h3 className="w-full text-2xl font-semibold tracking-tight">
                  Good afternoon, here is your patient list:
              </h3>
          </main>
            <Table>
              <TableCaption>(a caption that can be used)</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Health Status</TableHead>
                  <TableHead>Points</TableHead>
                  <TableHead className="text-right">DOB</TableHead>
                  <TableHead className="text-right">Allergies</TableHead>
                  <TableHead className="text-right">Room</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <PatientList patients={patients} />
              </TableBody>
            </Table>
        </div>
    );
}
