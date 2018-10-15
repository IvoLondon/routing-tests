import React, { Component } from 'react';
import Course from '../Course/Course'
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        showCourse : null,
    }

    loadCourseHandler = (id) => {
        this.setState({
            showCourse : id
        })
    }
    render () {
        let showView = null;
        this.state.showCourse ?
            showView = 
                <section className="Courses">
                    <article className="Course" onClick={() => this.loadCourseHandler(null)}>{this.state.courses[this.state.showCourse - 1].title}</article>;
                </section>
            
        :
            showView = 
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id} onClick={() => this.loadCourseHandler(course.id)}>{course.title}</article>;
                        } )
                    }
                </section>
        



        return (
            <div>
                <h1>Amazing Udemy Courses</h1>

                {showView}
            </div>
        );
    }
}

export default Courses;