'use client';
import { fetcher } from '@/utils/fetcher';
import { PrismaClient } from '@prisma/client';
import type Prisma from '@prisma/client';
import useSWR from 'swr';

type UserProps = Readonly<Prisma.User>;

export default function Home() {
  const { data, error } = useSWR('/api', fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {data.users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </main>
  );
}
