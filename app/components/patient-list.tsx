'use client'

import { Patient } from '@/lib/patient/model'
import { TableCell, TableRow } from '@/components/ui/table'
import { useRouter } from 'next/navigation'

export default function PatientList({ patients }: { patients: Patient[] }) {
    const router = useRouter()

    return patients.map((patient, index) => (
        <TableRow
            key={index}
            onClick={() => router.push(`/patient?id=${patient.id}`)}
            className="cursor-pointer"
        >
            <TableCell className="font-medium">{patient.name}</TableCell>
            <TableCell
                className={`${patient.healthStatus < 75 ? 'text-yellow-500' : 'text-green-600'}`}
            >
                {patient.healthStatus}%
            </TableCell>
            <TableCell className="text-green-600">
                {[...Array(patient.points || 0)].map(() => {
                    return '⬤'
                })}
            </TableCell>
            <TableCell className="text-right">{patient.dob}</TableCell>
            <TableCell className="text-right">{patient.allergies}</TableCell>
            <TableCell className="text-right">{patient.room}</TableCell>
        </TableRow>
    ))
}
