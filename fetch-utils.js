//supabase retrieval file
const SUPABASE_URL = 'https://ttldeenxxjworwkqykdt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bGRlZW54eGp3b3J3a3F5a2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2NDc5MTMsImV4cCI6MTk3NTIyMzkxM30.jEFkrL00S4lZ9cr9E2YhS5KP-GPwcdDh89zvFcsM0kg';


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getSpots() {
    const resp = await client.from('spot_types').select('*');
    console.log('resp', resp);

    return resp.data;

}

export async function getSpotsByID(id){
    const resp = await client.from('spot_types').select('*').match({ id });
    console.log('id');

    return resp.data;
}