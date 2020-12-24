let person = {
  title: prompt("Enter the name of the team"),
  leader: prompt("Enter the name of the team's leader "),
  members: Array(),
  memberCount: Number(),
  agenda: String(),
  isEvil: Boolean(),
};
// if (!Boolean(isEvil))
//     alert("Wrong input");
person.members = prompt("Enter the names of the members of the team");
// console.log(typeof person.members);
// let x = person.members.split(",");
person.memberCount = person.members.split(",").length + 1;
person.agenda = prompt("Enter the goals and ideas of the team");
person.isEvil = Boolean(prompt("Enter the team is evil or not"));

alert(`Here's the team
name - ${person.title}
leader - ${person.leader}
members - ${person.members}
memberCount - ${person.memberCount}
agenda - ${person.agenda}
isEvil - ${person.isEvil}`);
//console.log(person.memberCount);

// console.log(x.length + 1);
