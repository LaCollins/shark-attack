const students = [
  {
    id: 'student1',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    imgUrl: 'https://avatars1.githubusercontent.com/u/36553398?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Alesha',
    lastName: 'Reed',
    imgUrl: 'https://avatars1.githubusercontent.com/u/39807157?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    imgUrl: 'https://avatars0.githubusercontent.com/u/47763728?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Charity',
    lastName: 'Bunyon',
    imgUrl: 'https://avatars0.githubusercontent.com/u/52020883?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Connor',
    lastName: 'Sullivan',
    imgUrl: 'https://avatars0.githubusercontent.com/u/54124397?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Crystal',
    lastName: 'Broach',
    imgUrl: 'https://avatars2.githubusercontent.com/u/51486216?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Denise',
    lastName: 'Baker',
    imgUrl: 'https://avatars3.githubusercontent.com/u/38984447?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Evan ',
    lastName: 'Grabenstein',
    imgUrl: 'https://avatars2.githubusercontent.com/u/26425684?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Gabriel ',
    lastName: 'Seals',
    imgUrl: 'https://avatars1.githubusercontent.com/u/52087296?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Ivan ',
    lastName: 'Phelps',
    imgUrl: 'https://avatars2.githubusercontent.com/u/21040719?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    imgUrl: 'https://avatars0.githubusercontent.com/u/51467735?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Jamie ',
    lastName: 'Phillips',
    imgUrl: 'https://avatars2.githubusercontent.com/u/51938283?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Jasmine ',
    lastName: 'Williams',
    imgUrl: 'https://avatars1.githubusercontent.com/u/47404655?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'John ',
    lastName: 'Key',
    imgUrl: 'https://avatars3.githubusercontent.com/u/54037058?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'John ',
    lastName: 'Thielman',
    imgUrl: 'https://avatars3.githubusercontent.com/u/54124593?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    imgUrl: 'https://avatars0.githubusercontent.com/u/51214463?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    imgUrl: 'https://avatars2.githubusercontent.com/u/54123694?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    imgUrl: 'https://avatars1.githubusercontent.com/u/51382883?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    imgUrl: 'https://avatars0.githubusercontent.com/u/54197223?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    imgUrl: 'https://avatars2.githubusercontent.com/u/54127296?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    imgUrl: 'https://avatars0.githubusercontent.com/u/53092019?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    imgUrl: 'https://avatars2.githubusercontent.com/u/54008854?s=460&v=4',
    isDead: false,
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    imgUrl: 'https://avatars3.githubusercontent.com/u/40898992?s=460&v=4',
    isDead: false,
  },
];

const livingStudents = () => {
  const studentArray = [];
  students.forEach((student) => {
    if (student.isDead === false) {
      studentArray.push(student);
    }
  })
  return studentArray;
};

export default { livingStudents };
