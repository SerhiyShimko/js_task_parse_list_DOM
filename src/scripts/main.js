'use strict';

const li = document.querySelectorAll('li');
const perent = document.querySelector('ul');

function sortList(list) {
  const resultList = Array.from(list).sort((firstPerson, secondPerson) => {
    const firstPersonSalary = firstPerson.dataset.salary
      .slice(1)
      .split(',')
      .join('');
    const secondPersonSalary = secondPerson.dataset.salary
      .slice(1)
      .split(',')
      .join('');

    return Number(secondPersonSalary) - Number(firstPersonSalary);
  });

  for (const result of resultList) {
    perent.append(result);
  }

  return resultList;
}

function getEmployees(list) {
  const arraysPersons = [];

  for (const oneLi of list) {
    arraysPersons.push({
      name: oneLi.innerText,
      position: oneLi.dataset.position,
      salary: oneLi.dataset.salary,
      age: oneLi.dataset.age,
    });
  }

  return arraysPersons;
}

sortList(li);
getEmployees(li);
