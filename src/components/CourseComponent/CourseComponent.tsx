import type {ICourse} from "../../models/ICourse.ts";
import type {ReactNode} from "react";
import './CourseComponent.css'

interface CourseComponentProps {
    course: ICourse,
    children?: ReactNode;
}

export const CourseComponent = ({course, children}: CourseComponentProps) => {
    return (
        <div className="mt-4 mr-4 ml-4 mb-0 card">
            <h1>{course.title}</h1>
            <h3>{course.monthDuration} міс. / {course.hourDuration} год.</h3>
            <div>
                {children}
            </div>
        </div>
    );
};