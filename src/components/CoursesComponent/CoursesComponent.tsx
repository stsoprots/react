import {coursesArray} from "../../data/arrays.ts";
import {CourseComponent} from '../CourseComponent/CourseComponent.tsx'
import './CoursesComponent.css'

export const CoursesComponent = () => {
    return (
        <div>
            {
                coursesArray.map((course, index) => <CourseComponent course={course} key={index}>
                    <ul className='list-disc ml-4'>
                        {
                        course.modules.map((module, i) => (
                                <li key={i}>{module}</li>
                        ))}
                    </ul>
                </CourseComponent>)
            }
        </div>
    );
};

export default CourseComponent;