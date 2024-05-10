const newStudents = [
    {student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }}, 
    {student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }},
    {student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }}
  ] 
  
  const calculateAverage = (subjects) => {
    const totalMarks = Object.values(subjects).reduce((total, curr) => total + curr)
    const avg = totalMarks / Object.keys(subjects).length
    return avg
  }
  let i = 0
  const averages = newStudents.map(student => {
    // console.log('--------------------------------')
    // console.log(i, student)
    // console.log(Object.keys(student))
    // i++
    const studentName = Object.keys(student)[0]
    const average = calculateAverage(student[studentName])
    return {[studentName]: {average}}
  })
  
  console.log(averages)
