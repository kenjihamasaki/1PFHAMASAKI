interface NavItem{
    path: string;
    title: string;
    icon?: string;
    allowedRoles: string[];
}

const links: NavItem[] = [
    {
        path: 'alumno',
        title: 'Alumnos',
        icon: 'person',
        allowedRoles: [],
    },
    {
        path: 'curso',
        title: 'Curso',
        icon: 'school',
        allowedRoles: ['admin'],    
    },
    {
        path: 'inscripciones',
        title: 'Inscripciones',
        icon: 'book',
        allowedRoles: [],
    },
    {
        path: 'usuario',
        title: 'Usuario',
        icon: 'key',
        allowedRoles:['admin'],
    }
    
]

export default links;