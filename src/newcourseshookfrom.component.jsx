import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CoursesContext } from './courses.component';

export default function NewCourseWithReactHookForms() {
  const coursesCtx = useContext(CoursesContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  return (
    <div className="row justify-content-md-center m-4">
      <form
        className="col-md-4 alert alert-secondary"
        onSubmit={() => {
          handleSubmit((data) => console.log(data));
          navigate('/');
        }}
      >
        <h2>New Course</h2>
        <label htmlFor="txtCourseId">Id : </label>
        <input
          type="number"
          id="txtCourseId"
          className="form-control"
          {...register('CourseId', { required: 'CourseId is required !' })}
        />
        {errors.CourseId && (
          <p style={{ color: 'red' }}>{errors.CourseId.message}</p>
        )}
        <label htmlFor="txtCourseName">Title : </label>
        <input
          type="text"
          id="txtCourseName"
          className="form-control"
          {...register('CourseName', {
            required: 'Course Name is required !',
            maxLength: {
              value: 20,
              message: 'You exceeded maxlength 20 !',
            },
          })}
        />

        {errors.CourseName && (
          <p style={{ color: 'red' }}>{errors.CourseName.message}</p>
        )}
        <label htmlFor="txtCoursePrice">Price : </label>
        <input type="number" id="txtCoursePrice" className="form-control" />
        <label htmlFor="txtCourseLikes">Likes : </label>
        <input type="number" id="txtCourseLikes" className="form-control" />
        <label htmlFor="txtCourseRating">Rating : </label>
        <input type="number" id="txtCourseRating" className="form-control" />
        <label htmlFor="txtCourseImage">Image URL : </label>
        <input type="text" id="txtCourseImage" className="form-control" />

        <button className="btn btn-success my-2">Add New Course</button>
      </form>
    </div>
  );
}
