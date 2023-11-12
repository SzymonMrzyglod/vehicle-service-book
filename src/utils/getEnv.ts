import { NameToType } from '@/types/common';

export function getEnv<Env extends keyof NameToType>(
  name: Env
): NameToType[Env];
export function getEnv(name: keyof NameToType): NameToType[keyof NameToType] {
  const val = process.env[name];

  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }

  return val as any;
}
