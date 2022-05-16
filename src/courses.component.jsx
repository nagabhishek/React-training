import React, { useState } from 'react';
import { Outlet, Route, Router, Routes } from 'react-router-dom';
import ListOfCourses from './listofcourses.component';
import NewCourseWithReactHookForms from './newcourse.reacthookform';

export var CoursesContext = React.createContext();

export default function Courses(props) {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'React',
      price: 5000,
      likes: 400,
      rating: 5,
      imageUrl:
        'https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg',
    },
    {
      id: 2,
      title: 'Redux',
      price: 4000,
      likes: 600,
      rating: 5,
      imageUrl: 'https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg',
    },
    {
      id: 3,
      title: 'Node',
      price: 6000,
      likes: 900,
      rating: 4,
      imageUrl:
        'https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1',
    },
    {
      id: 4,
      title: 'Angular',
      price: 5000,
      likes: 200,
      rating: 3,
      imageUrl:
        'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15991/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png',
    },
    {
      id: 5,
      title: 'Flutter',
      price: 7000,
      likes: 700,
      rating: 4,
      imageUrl:
        'https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg',
    },
  ]);
  return (
    <div>
      <CoursesContext.Provider
        value={{
          allCourses: courses,
          addCourse: (course) => setCourses({ ...courses, course }),
        }}
      >
        <Outlet></Outlet>
      </CoursesContext.Provider>
    </div>
  );
}
