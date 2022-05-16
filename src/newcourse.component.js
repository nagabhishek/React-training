import React from 'react';
export default class NewCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-md-center m-4">
        <form className="col-md-4 alert alert-secondary">
          <h2>New Course</h2>
          <label htmlFor="txtCourseId">Id : </label>
          <input
            type="number"
            id="txtCourseId"
            className="form-control"
            onInput={(e) => this.setState({ id: e.target.value })}
          />
          <label htmlFor="txtCourseName">Title : </label>
          <input
            type="text"
            id="txtCourseName"
            className="form-control"
            onInput={(e) => this.setState({ title: e.target.value })}
          />
          <label htmlFor="txtCoursePrice">Price : </label>
          <input
            type="number"
            id="txtCoursePrice"
            className="form-control"
            onInput={(e) => this.setState({ price: e.target.value })}
          />
          <label htmlFor="txtCourseLikes">Likes : </label>
          <input
            type="number"
            id="txtCourseLikes"
            className="form-control"
            onInput={(e) => this.setState({ likes: e.target.value })}
          />
          <label htmlFor="txtCourseRating">Rating : </label>
          <input
            type="number"
            id="txtCourseRating"
            className="form-control"
            onInput={(e) => this.setState({ rating: e.target.value })}
          />
          <label htmlFor="txtCourseImage">Image URL : </label>
          <input
            type="text"
            id="txtCourseImage"
            className="form-control"
            onInput={(e) => this.setState({ imageUrl: e.target.value })}
          />

          <button
            type="button"
            className="btn btn-success my-2"
            onClick={() => this.props.AddNewCourse(this.state)}
          >
            Add New Course
          </button>
        </form>
      </div>
    );
  }
}
