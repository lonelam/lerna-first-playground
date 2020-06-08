import { lernaB } from '@laizn/lerna-b';
export function lernaA(arg: number) {
  console.log('lerna -a output modified', arg);
  lernaB();
}