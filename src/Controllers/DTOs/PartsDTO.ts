import { IsNotEmpty, NotEquals } from 'class-validator';

export class PartsDTO {
    constructor() {
        this.name = ""
        this.plant = 0
        this.units = 0
        this.weight = 0
    }
    @IsNotEmpty({ message: 'Name cannot be empty' })
    name: string;
    @NotEquals(0, { message: 'plant should not be empty' })
    plant: number;
    @NotEquals(0, { message: 'units should not be empty' })
    units: number;
    @NotEquals(0, { message: 'weight should not be empty' })
    weight: number;
}