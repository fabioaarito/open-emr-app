import {NextResponse} from "next/server";
import {getBearerToken} from "@/lib/auth/actions";
import {getPatients} from "@/lib/patient/actions";
import {HttpStatusCode} from "axios";

export async function GET() {

    const bearerToken = await getBearerToken();

    if(!bearerToken) {
        return NextResponse.json({message: 'Failed to authorize request'}, {status: HttpStatusCode.Unauthorized});
    }

    const patients = await getPatients(bearerToken);

    return NextResponse.json({patients})

}
