export async function getBearerToken(): Promise<string | undefined>  {
    try {

        const tokenUrl = `${process.env.AZURE_AUTHORITY}/${process.env.AZURE_TENANT_ID}/oauth2/token`;

        const params = new URLSearchParams({
            client_id: process.env.AZURE_CLIENT_ID!,
            client_secret: process.env.AZURE_CLIENT_SECRET!,
            grant_type: 'Client_Credentials',
            resource: process.env.AZURE_RESOURCE!,
        });

        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
        });



        const data = await response.json();

        if (!response.ok) {
            return;
        }

        return data.access_token;
    } catch {
        return;
    }
}