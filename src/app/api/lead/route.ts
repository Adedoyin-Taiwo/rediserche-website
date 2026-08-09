import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ['name', 'email', 'projectType', 'message'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }

    // Phase 0 behavior: log the lead. Next step: connect this to email, CRM, Google Sheets, or Django backend.
    console.log('New RediSerche website lead:', body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
