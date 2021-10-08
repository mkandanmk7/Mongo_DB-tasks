// use students; switch to students database;

/*inserting users*/

db.users.insertMany([
  {
    userid: 1,
    name: "Harikrishna",
    email: "hari@gmail.com",
    mentorid: 1,
  },
  {
    userid: 2,
    name: "KaviArasan",
    email: "kavi@gmail.com",
    mentorid: 2,
  },
  {
    userid: 3,
    name: "Manimaran",
    email: "mani@gmail.com",
    mentorid: 3,
  },
  {
    userid: 4,
    name: "Subash",
    email: "subash@gmail.com",
    mentorid: 1,
  },
  {
    userid: 5,
    name: "ItachiUchika",
    email: "itachu@gmail.com",
    mentorid: 2,
  },
]);
/*.............................................................................................................................................*/
/*codekata*/

db.codekata.insertMany([
  {
    userid: 1,
    problems: 10,
  },
  {
    userid: 2,
    problems: 40,
  },
  {
    userid: 3,
    problems: 20,
  },
  {
    userid: 4,
    problems: 50,
  },
  {
    userid: 5,
    problems: 70,
  },
]);

/*....................................................................................................................................................*/
/*topics*/

db.topics.insertMany([
  {
    topicid: 1,
    topic: "html",
    topic_date: new Date("4-oct-2020"),
  },
  {
    topicid: 2,
    topic: "css",
    topic_date: new Date("10-oct-2020"),
  },
  {
    topicid: 3,
    topic: "Javascript",
    topic_date: new Date("15-oct-2020"),
  },
  {
    topicid: 4,
    topic: "React",
    topic_date: new Date("20-oct-2020"),
  },
  {
    topicid: 5,
    topic: "NodeJs",
    topic_date: new Date("25-oct-2020"),
  },
]);

/*..............................................................................................................................................................*/
/*tasks*/

db.tasks.insertMany([
  {
    taskid: 1,
    topicid: 1,
    userid: 1,
    task: "html task",
    due_date: new Date("4-oct-2020"),
    submitted: true,
  },
  {
    taskid: 2,
    topicid: 2,
    userid: 2,
    task: "css task",
    due_date: new Date("10-oct-2020"),
    submitted: true,
  },
  {
    taskid: 3,
    topicid: 3,
    userid: 3,
    task: "Javascript task",
    due_date: new Date("15-oct-2020"),
    submitted: false,
  },
  {
    taskid: 4,
    topicid: 4,
    userid: 4,
    task: "React task",
    due_date: new Date("20-oct-2020"),
    submitted: false,
  },
  {
    taskid: 5,
    topicid: 5,
    userid: 5,
    task: "Node task",
    due_date: new Date("25-oct-2020"),
    submitted: false,
  },
]);
/*....................................................................................................................................................*/
/*attendance*/

db.attendance.insertMany([
  {
    userid: 1,
    topicid: 1,
    attended: true,
  },
  {
    userid: 2,
    topicid: 2,
    attended: true,
  },
  {
    userid: 3,
    topicid: 3,
    attended: false,
  },
  {
    userid: 4,
    topicid: 4,
    attended: false,
  },
  {
    userid: 5,
    topicid: 5,
    attended: false,
  },
]);

/*...................................................................................................................................................*/
/*mentors*/

db.mentors.insertMany([
  {
    mentorid: 1,
    mentorname: "Naruto",
    mentor_email: "naruto@gmail.com",
  },
  {
    mentorid: 2,
    mentorname: "Sasuke",
    mentor_email: "sasuke@gmail.com",
  },
  {
    mentorid: 3,
    mentorname: "Kakashi",
    mentor_email: "kakashi@gmail.com",
  },
  {
    mentorid: 4,
    mentorname: "Minato",
    mentor_email: "minato@gmail.com",
  },
  {
    mentorid: 5,
    mentorname: "sakura",
    mentor_email: "sakura@gmail.com",
  },
]);

/*.................................................................................................................................................*/
/*company drives*/

db.comapnydrives.insertMany([
  {
    userid: 1,
    drive_date: new Date("10-oct-2020"),
    company: "Google",
  },
  {
    userid: 1,
    drive_date: new Date("15-oct-2020"),
    company: "Amazon",
  },
  {
    userid: 2,
    drive_date: new Date("20-oct-2020"),
    company: "SAP labs",
  },
  {
    userid: 3,
    drive_date: new Date("25-oct-2020"),
    company: "Mac App studio",
  },
  {
    userid: 4,
    drive_date: new Date("27-oct-2020"),
    company: "Freshworks",
  },
]);
