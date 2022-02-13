NameOfTheStudentArray=[];
function Submit()
{
    var Name1=document.getElementById("Student1").value;
    var Name2=document.getElementById("Student2").value;
    var Name3=document.getElementById("Student3").value;
    var Name4=document.getElementById("Student4").value;
    NameOfTheStudentArray.push(Name1);
    NameOfTheStudentArray.push(Name2);
    NameOfTheStudentArray.push(Name3);
    NameOfTheStudentArray.push(Name4);
    console.log(NameOfTheStudentArray);
    document.getElementById("displayName").innerHTML=NameOfTheStudentArray;
    document.getElementById("SubmitBtn").style.display="none";
    document.getElementById("SortBtn").style.display="inline-block";
}
function Sorting()
{
    NameOfTheStudentArray.sort();
    console.log(NameOfTheStudentArray);
    document.getElementById("displayName").innerHTML=NameOfTheStudentArray;
}