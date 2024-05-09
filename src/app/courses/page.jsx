import React from 'react';
import CoursePage from '@components/course-page/course-landing-page/CoursesPage';
import Head from 'next/head';

const Course = () => {
  return (
    <div> 
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <CoursePage/>
    </div>
  )
}

export default Course