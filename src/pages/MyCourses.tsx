import React from 'react';
import CourseCard from '../components/CourseCard/CourseCard';
import { courses } from '../data/courses';
import { useNavigate } from 'react-router-dom';

// fake enrolled courses for now
const enrolledCourseIds = ['tasis'];

const MyCourses: React.FC = () => {
  const navigate = useNavigate();
  const enrolledCourses = courses.filter(course => enrolledCourseIds.includes(course.id));

  if (enrolledCourses.length === 0) {
    return <div className="text-center p-8">لم يتم الاشتراك في أي دورة بعد</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {enrolledCourses.map((course) => (
        <div key={course.id} onClick={() => navigate(`/courses/${course.id}`)}>
          <CourseCard
            title={course.title}
            image={course.image}
            details={course.details}
            buttonText={`عرض الدورة`}
          />
        </div>
      ))}
    </div>
  );
};

export default MyCourses;
