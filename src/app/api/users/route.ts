import { prisma } from '../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  console.log(users);
  let json_response = {
    status: 'success',
    results: users.length,
    users,
  };
  return NextResponse.json(json_response);
}
