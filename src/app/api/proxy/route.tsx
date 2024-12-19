import { NextResponse } from 'next/server';

export async function GET() {
  const API_URL = 'https://api.rajaongkir.com/starter/city';
  const API_KEY = 'd632a990a4c4384b6750ff36fcddc438';

  try {
    const response = await fetch(API_URL, {
      headers: {
        key: API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
