import React from 'react';
import Course from './course.component';
import NewCourse from './newcourse.component';
import Couses from './course.component';

class ListOfCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
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
          imageUrl:
            'https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg',
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
      ],
    };
  }

  componentWillMount() {
    console.log('Within Component Will Mount !'); // deprecated !
  }

  componentDidMount() {
    console.log('Within Component Did Mount !');
  }

  shouldComponentUpdate() {
    console.log('Within shouldComponentUpdate !');
    return true;
  }

  componentWillUpdate() {
    console.log('Within componentWillUpdate !'); // deprecated !
  }

  componentDidUpdate() {
    console.log('Within componentDidUpdate !');
  }

  DeleteACourse(theCourseId) {
    console.log('Deleting Course..', theCourseId);
    // Delete logic !
    // this.state.courses.splice() Should not be used ! - as it manipulate the state
    // this.state.courses = this.state.courses.filter( // has no effect - manipulating the state
    //   (course) => course.id != theCourseId
    // );

    let newCourseList = this.state.courses.filter(
      (course) => course.id != theCourseId
    );

    this.setState({ courses: newCourseList });
  }

  AddNewCourse(newCourse) {
    // console.log(newCourse);
    // this.state.courses.push(newCourse); manipulating the state object
    this.setState({ courses: [...this.state.courses, newCourse] });
  }

  render() {
    console.log('Within Render');
    let coursesToBeCreated = this.state.courses.map((course) => (
      <Course
        coursedetails={course}
        DeleteACourse={(theCourseId) => this.DeleteACourse(theCourseId)}
        key={course.id}
      />
    ));
    return (
      <>
        <header>
          <h1> List Of Courses</h1>
        </header>
        <main>
          <div className="row">{coursesToBeCreated}</div>
        </main>
      </>
    );
  }
}

export default ListOfCourses;
