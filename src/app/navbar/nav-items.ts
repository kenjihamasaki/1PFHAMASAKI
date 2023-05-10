interface NavItem{
    path: string;
    title: string;
    icon?: string;
}

const links: NavItem[] = [
    {
        path: 'alumno',
        title: 'Alumnos',
        icon: 'person',
    },
    {
        path: 'curso',
        title: 'Curso',
        icon: 'school'
    },
    {
        path: 'usuario',
        title: 'Usuario',
    }
]

export default links;