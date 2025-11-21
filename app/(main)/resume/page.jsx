import { getResume } from '@/actions/resume'
import React from 'react'
import Resumebuilder from './_components/resume-builder';

const ResumePage = async() => {
    const resume = await getResume();

  return (
    <div className = "container mx-auto py-6">
        <Resumebuilder initialContent = {resume?.content}/>
    </div>
  )
}

export default ResumePage