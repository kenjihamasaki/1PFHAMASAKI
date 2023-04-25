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
        path: 'observables',
        title: 'Observables',
        icon: 'search',
    },
]

export default links;