import { PrismaClient } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const users = await prisma.user.findMany();
  let json_response = {
    status: 'success',
    results: users.length,
    users,
  };
  return NextResponse.json(json_response);
}
// const prisma = new PrismaClient();

// export default async function handle(req, res) {
//   const users = await prisma.user.findMany();
//   res.json(users);
// }
