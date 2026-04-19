import './CoursesComponent.css';
import {coursesAndDurationArray} from "../../arrays.ts";

import {CourseComponent} from "../course-component/CourseComponent.tsx";
import type {ICourseModel} from "../../models/CourseModel.ts";


export const CoursesComponent = () => {


    return (
        <ul>
            {
                coursesAndDurationArray.map((course: ICourseModel, index: number) => {
                    return <CourseComponent course={course} key={index}/>;
                })
            }

        </ul>
    );
};