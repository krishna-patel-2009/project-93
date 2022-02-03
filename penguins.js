function addUser()
{
    addUser = document.getElementById("user_name").value ;
    localStorage.getItem("user_name", user_name);
    label = document.getElementById("user_name").value;

    window.location = "penguins_room.html";
}