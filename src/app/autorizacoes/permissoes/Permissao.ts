
import { Role } from "../../roles/Role";

export class Authorization{
    id!:string;
    role!:Role;
    idUser!:number;
    idRole!: number;
}

export type AuthorizationPage={
    content: Authorization[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
