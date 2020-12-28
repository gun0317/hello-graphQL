export const people = [
  {
    id: 1,
    name: 'ygun1',
    age: 271,
    gender: 'male'
  },
  {
    id: 2,
    name: 'ygun2',
    age: 272,
    gender: 'male'
  },
  {
    id: 3,
    name: 'ygun3',
    age: 273,
    gender: 'male'
  }
]

export const getPersonById = id => {
  const targetIndex = people.findIndex(person => id === +person.id)
  return people[targetIndex]
}