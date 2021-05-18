var studentArray = []

function submit() {
    var student1 = document.getElementById("student_1").value;
    var student2 = document.getElementById("student_2").value;
    var student3 = document.getElementById("student_3").value;
    var student4 = document.getElementById("student_4").value;
    studentArray.push(student1);
    studentArray.push(student2);
    studentArray.push(student3);
    studentArray.push(student4);
    console.log(studentArray);
    document.getElementById("result").innerHTML = studentArray;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}


function sort() {
    document.getElementById("result").innerHTML = studentArray.sort();
    console.log(studentArray);

}
