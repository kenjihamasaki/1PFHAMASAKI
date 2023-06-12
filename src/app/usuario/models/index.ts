export interface Usuario {
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    token: string,
    role: string

}

export interface CreateUsuarioData {
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    token: string,
    role: string
}