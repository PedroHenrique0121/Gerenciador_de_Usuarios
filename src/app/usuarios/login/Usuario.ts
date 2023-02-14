import { Authorization } from "src/app/autorizacoes/permissoes/Permissao";


export class Usuario{
    id!: number
    login!: string;
    nome!: string;
    senha!: string;
    authorizations!: Authorization[]

}

export type UsuarioPage={
    content: Usuario[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}