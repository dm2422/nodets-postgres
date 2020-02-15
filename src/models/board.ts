export class Board {
    id!: string;
    name!: string;
    created_at!: Date;
    constructor(init?: Partial<Board>) {
        Object.assign(this, init);
    }
}
