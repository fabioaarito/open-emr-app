'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const patients = [
  {
    name: "Aragón, Gabriel",
    healthStatus: 77,
    points: "⬤",
    dob: "1941-07-25",
    allergies: "2",
    room: "4D",
  },
  {
    name: "Batz, Carson",
    healthStatus: 21,
    points: "⬤⬤",
    dob: "1955-01-25",
    allergies: "-",
    room: "17A",
  },
];



export default function Home() {

  const renderPatientsList = () => {
    return patients.map((patient, index) => (
        <TableRow onClick={() => alert("xxdx")}>
          <TableCell className="font-medium">{patient.name}</TableCell>
          <TableCell className={`${patient.healthStatus < 75 ? "text-yellow-500" : "text-green-600"}`}>{patient.healthStatus}%</TableCell>
          <TableCell className="text-green-600">{patient.points}</TableCell>
          <TableCell className="text-right">{patient.dob}</TableCell>
          <TableCell className="text-right">{patient.allergies}</TableCell>
          <TableCell className="text-right">{patient.room}</TableCell>
        </TableRow>
      )
    )};

  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-4 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:items-start">
          <h3 className="w-96 text-2xl font-semibold tracking-tight">
              Good afternoon. here is your patient list: 
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
            {renderPatientsList()}
          </TableBody>
        </Table>
    </div>
  );
}
