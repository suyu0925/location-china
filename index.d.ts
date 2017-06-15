export enum Level {
  Province = 1,
  City = 2,
  District = 3,
  Street = 4
}

export abstract class Location {
  public code: string
  public name: string
  public level: Level
  public parent: string

  constructor(code: string, level: Level)
  public abstract toString(): string
  public abstract toShort(): string
}

export class Province extends Location {
  public constructor(code: string)
  public toString(): string
  public toShort(): string
}

export function provinces(): Location[]

export function cities(): Location[]

export function districts(): Location[]

export function streets(): Location[]

export function from(value: number | string, level?: Level)

export function fromCode(code: string, level?: Level): Location

export function fromString(name: string, level?: Level): Location
