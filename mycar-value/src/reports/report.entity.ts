import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

// Compare this snippet from mycar-value/src/reports/reports.module.ts:
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  mileage: number;

  @Column()
  approved: boolean;
}
