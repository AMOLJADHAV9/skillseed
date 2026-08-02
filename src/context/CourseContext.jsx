import React, { createContext, useContext, useState } from 'react';
import { MOCK_COURSES } from '../data/mockCourses';

const CourseContext = createContext(null);

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(MOCK_COURSES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const completeLesson = (courseId, lessonId) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id !== courseId) return c;
        const updatedModules = c.modules.map((m) => ({
          ...m,
          lessons: m.lessons.map((les) => (les.id === lessonId ? { ...les, completed: true } : les))
        }));
        return {
          ...c,
          modules: updatedModules,
          progress: Math.min(100, c.progress + 15)
        };
      })
    );
  };

  const getCourseById = (id) => courses.find((c) => c.id === id) || courses[0];

  return (
    <CourseContext.Provider
      value={{
        courses,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        completeLesson,
        getCourseById
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);
