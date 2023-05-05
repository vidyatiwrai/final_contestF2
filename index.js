async function loadData() {
    try {
      const response = await fetch("MOCK_DATA.json");
      const data = await response.json();
      displayStudentsInTable(data);
    } catch (error) {
      alert("Something Went Wrong", error);
    }
  }
  
  //calling loadData function to load the data from JSON and display in UI
  loadData();
  
  //function to take the data as JSON format and display in UI
  function displayStudentsInTable(data) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    data.forEach((student) => {
      const tr = document.createElement("tr");
      const id = document.createElement("td");
      id.innerText = `${student.id}.`;
      tr.appendChild(id);
      const name_td = document.createElement("td");
      const name = document.createElement("div");
      name.className = "name";
      const img = document.createElement("img");
      img.src = `${student.img_src}`;
      name.appendChild(img);
      const span = document.createElement("span");
      span.innerText = `${student.first_name} ${student.last_name}`;
      name.appendChild(span);
      name_td.appendChild(name);
      tr.appendChild(name_td);
      const gender = document.createElement("td");
      gender.innerText = `${student.gender}`;
      tr.appendChild(gender);
      const standard = document.createElement("td");
      standard.innerText = `${student.class}`;
      tr.appendChild(standard);
      const marks = document.createElement("td");
      marks.innerText = `${student.marks}`;
      tr.appendChild(marks);
      const pass = document.createElement("td");
      pass.innerText = student.passing == true ? "Passing" : "Failed";
      tr.appendChild(pass);
      const email = document.createElement("td");
      email.innerText = `${student.email}`;
      tr.appendChild(email);
      tableBody.appendChild(tr);
    });
  }
  
  //to register click event listner to the form
  const form = document.getElementById("search-form");
  form.addEventListener("click", searchedData);
  
  //function to filter data based upon search
  async function searchedData(e) {
    e.preventDefault();
    const searchedString = form.search.value.toLowerCase();
    try {
      const response = await fetch("MOCK_DATA.json");
      const data = await response.json();
      const resultData = data.filter((student) => {
        const fname = student.first_name.toLowerCase();
        const lname = student.last_name.toLowerCase();
        const email = student.email.toLowerCase();
        return (
          fname.includes(searchedString) ||
          lname.includes(searchedString) ||
          email.includes(searchedString)
        );
      });
      displayStudentsInTable(resultData);
    } catch (error) {
      alert("Something Went Wrong", error);
    }
  }
  
  //to register click event listner to the ascending button
  const az_sort_btn = document.getElementById("az_sort_btn");
  az_sort_btn.addEventListener("click", sortAscending);
  
  //function to sort ascending order
  async function sortAscending() {
    try {
      const response = await fetch("MOCK_DATA.json");
      const data = await response.json();
      data.sort((a, b) => {
        return (a.first_name + " " + a.last_name).localeCompare(
          b.first_name + " " + b.last_name
        );
      });
      displayStudentsInTable(data);
    } catch (e) {
      alert("Something Went Wrong", error);
    }
  }
  
  //to register click event listner to the descending button
  const za_sort_btn = document.getElementById("za_sort_btn");
  za_sort_btn.addEventListener("click", sortDescending);
  
  //function to sort descending order
  async function sortDescending() {
    try {
      const response = await fetch("MOCK_DATA.json");
      const data = await response.json();
      data.sort((a, b) => {
        return (b.first_name + " " + b.last_name).localeCompare(
          a.first_name + " " + a.last_name
        );
      });
      displayStudentsInTable(data);
    } catch (e) {
      alert("Something Went Wrong", error);
    }
  }
  
  //to register click event listner to the sort by marks button
  const sort_marks_btn = document.getElementById("sort_marks_btn");
  sort_marks_btn.addEventListener("click", sortByMarks);
  
  //function to sort by marks
  async function sortByMarks() {
    try {
      const response = await fetch("MOCK_DATA.json");
      const data = await response.json();
      data.sort((a, b) => {
        return a.marks - b.marks;
      });
      displayStudentsInTable(data);
    } catch (e) {
      alert("Something Went Wrong", error);
    }
  }
  
  //to register click event listner to the sort by passing button
  const pass_btn = document.getElementById("pass_btn");
  pass_btn.addEventListener("click", filterPassed);
  
  //function to filter passed students
  async function filterPassed() {
    try {
      const response = await fetch("MOCK_DATA.json");
      const data = await response.json();
      displayStudentsInTable(
        data.filter((student) => {
          return student.passing;
        })
      );
    } catch (e) {
      alert("Something Went Wrong", error);
    }
  }
  
  //to register click event listner to the sort by class button
  const sort_class_btn = document.getElementById("sort_class_btn");
  sort_class_btn.addEventListener("click", sortByClass);
  
  //function to sort by class students
  async function sortByClass() {
    try {
      const response = await fetch("MOCK_DATA.json");
      const data = await response.json();
      data.sort((a, b) => {
        return a.class - b.class;
      });
      displayStudentsInTable(data);
    } catch (e) {
      alert("Something Went Wrong", error);
    }
  }
  
  //to register click event listner to the sort by gender button
  const sort_gender_btn = document.getElementById("sort_gender_btn");
  sort_gender_btn.addEventListener("click", sortByGender);
  
  //function to sort by gender students
  async function sortByGender() {
    try {
      const response = await fetch("MOCK_DATA.json");
      const data = await response.json();
      data.sort((a, b) => {
        return a.gender.localeCompare(b.gender);
      });
      displayStudentsInTable(
        data.filter((student) => {
          return student.gender == "Male" || student.gender == "Female";
        })
      );
    } catch (e) {
      alert("Something Went Wrong", error);
    }
  }