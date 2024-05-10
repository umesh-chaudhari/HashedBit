//Q.1
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];
const statesWithoutVowel = indianStates.filter(state => {
  const first = state.charAt(0).toLowerCase()
  return !['a', 'e', 'i', 'o', 'u'].includes(first)
})
console.log(statesWithoutVowel)

//Q.2
let str = 'I Love My India'
let words = str.split(' ')
words = words.reverse()
const finalString = words.join(' ')
console.log(finalString)

//Q.3
let str1 = 'INDIA'
let arr = str1.split('')
arr.splice(3, 0, 'O', 'N', 'E', 'S')
console.log(arr.join(""))

//Q.4
let sample = "This is a sample string with some vowels and consonants"
let vowel = 0
let consonent = 0
sample.toLowerCase().split("").map(char => {
  if (['a', 'e', 'i', 'o', 'u'].includes(char))
    vowel++
  else
    consonent++
})
console.log(vowel, consonent)

//Q.5
function replaceWord(sentence, wrong, correct) {
  const regex = new RegExp("\\b" + wrong + "\\b", "gi");
  const correctedSentence = sentence.replace(regex, correct);
  return correctedSentence;
}
const sentence = "I loveebdhgf programming!";
const correctedSentence = replaceWord(sentence, "loveebdhgf", "love");
console.log(correctedSentence);

//Q.6
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3]
let outputArr = []
inputArr.filter(num => {
  if (num > 5)
    outputArr.push(num)
})

console.log(outputArr)

//Q.7
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
students.map(student => {
  student.scores.reduce((accumulator, currentValue, index, array)=>{
    accumulator+=currentValue

    if (index === array.length-1) {
      student.average = accumulator / array.length
      delete student.scores
    }
    return accumulator
  })
}, 0)
console.log(students)

//Q.8

const repeatedSum = (number) =>{
  if(number < 10)
    return number

  let digits = String(number).split("").map(Number)

  const sum = digits.reduce((acc, curr) => acc + curr, 0)

  return repeatedSum(sum)
}
console.log(repeatedSum(456))

//Q.9
const findWordCount = (paragraph)=>{
  const words = paragraph.split(/\s+/)
  return words.length
}
const para = "This is a sample paragraph with several words."
console.log(findWordCount(para))

//Q.10 
const reverseString = (str) => {
  let arr = str.split("")
  return arr.reverse().join("")
}
console.log(reverseString("Hello"))

//Q.11
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
const averages = newStudents.map(student => {
  const studentName = Object.keys(student)[0]
  const average = calculateAverage(student[studentName])
  return {[studentName]: {average}}
})

console.log(averages)