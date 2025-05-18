import React from 'react';
import CourseCard from '../components/CourseCard/CourseCard';
import { courses } from '../data/courses';
import { useNavigate } from 'react-router-dom';

const AllCourses: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {courses.map((course) => (
        <div key={course.id} onClick={() => navigate(`/courses/${course.id}`)}>
          <CourseCard
            title={course.title}
            image={course.image}
            details={course.details}
            buttonText={`اشترك بـ ${course.price} ريال`}
          />
        </div>
      ))}
    </div>
  );
};

export default AllCourses;
