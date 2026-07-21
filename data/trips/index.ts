import { manchester } from "./manchester";
import { croatia } from "./croatia";
import { newbury } from "./newbury";
import { chichester } from "./chichester";
import { lakeDistrict } from "./lake-district";
import { lakeGarda } from "./lake-garda";
import { thailand } from "./thailand";

export const trips = [
  manchester,
  croatia,
  newbury,
  chichester,
  lakeDistrict,
  lakeGarda,
  thailand
] as const;

export type Trip = (typeof trips)[number];

export function getTrip(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}
