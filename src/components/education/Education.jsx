import { Container, Typography } from '@mui/material'
import React from 'react'
import EducationSectionGeneration from './education-section/EducationSectionGeneration'
import "./Education.css"

const Education = () => {
  const educations = {
    "B.Tech.": {
      educationInstitute: "Kamla Nehru Institute of Technology, Sultanpur",
      startDate: "2017",
      endDate: "2021",
      src: 'knit_logo.webp',
      result: "CGPA: 7.85"
    },
    "Class XII": {
      educationInstitute: "JBS Children Paradise School, Kota",
      startDate: "2016",
      src: 'jbs_logo.png',
      result: "Percentage: 61%"
    },
    "Class X": {
      educationInstitute: " KV NAD, Karanja, Navi Mumbai",
      startDate: "2014",
      src: 'kv_logo.jpg',
      result: "PCGPA: 8.4"
    }
  }
  return (
    <Container maxWidth="xl" className='education' id="education">
      <Typography sx={{fontSize: "1.5rem", lineHeight: "1rem", fontWeight: "600"}}>Education</Typography>
      <Typography sx={{fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", color: "gray"}} mt={1} mb={1}>Details about my educational background.</Typography>

      <EducationSectionGeneration educations={educations}/>
    </Container>
  )
}

export default Education