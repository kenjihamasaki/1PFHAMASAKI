import { Subject } from "../../subjects/models";
import { PeriodicElement } from "../../alumno/alumno.component";
import { Curso } from "../../curso/models";
import { Alumno } from "src/app/alumno/models";

export interface Inscripcion {
    id: number;
    studentId: number;
    cursoId: number;
    subjectId: number;
}

export interface InscripcionWithStudent extends Inscripcion{
    student: PeriodicElement;
}

export interface InscripcionWithSubject extends Inscripcion {
    subject: Subject;
}

export interface InscripcionWithCurso extends Inscripcion {
    course: Curso;
}

export interface CreateInscripcionData {
    studentId: number;
    courseId: number;
    subjectId: number;
  }

export type InscripcionWithAll = InscripcionWithStudent & InscripcionWithCurso & InscripcionWithSubject;
