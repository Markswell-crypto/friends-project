document.addEventListener("DOMContentLoaded", () => {

   // console.log(form)
    const friendsDiv = document.getElementById("container");
  
    // Fetch the existing friends data.
    fetch("http://localhost:3000/Friends")
      .then((res) => res.json())
      .then((data) => {
    // Display the existing friends.
        data.forEach((element) => {
          let name = document.createElement("h2");
          let gender = document.createElement("p");
          let button = document.createElement("button");
          button.textContent = "Delete";
          
  
          name.textContent = element.name;
          gender.textContent = element.gender;
  
          friendsDiv.appendChild(name);
          friendsDiv.appendChild(gender);
          friendsDiv.appendChild(button);
          
  // Delete a friend

          button.addEventListener("click", () => {
            fetch(`http://localhost:3000/Friends/${element.id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((element) => {
  
                friendsDiv.removeChild(name);
                friendsDiv.removeChild(gender);
                friendsDiv.removeChild(button);
              });
          });
   let button1 = document.createElement("button");
   button1.textContent = "Update";
   friendsDiv.appendChild(button1);
  //console.log(button1)        
   button1.addEventListener("click", (e) => {
    e.preventDefault();
  
    // Get the updated friend data from the form.
    
    const updatedFriend = {
      name : prompt ("Enter updated name:"),
      gender : prompt ("Enter Updated gender")
    }
    name.textContent
    // Make a PATCH request to update the friend data.
    fetch(`http://localhost:3000/Friends/${element.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFriend),
    })
      .then((res) => res.json())
      .then((result) => {
          name.textContent = updatedFriend.name;
          gender.textContent = updatedFriend.gender;
          alert("Friend data updated successfully!");
      });
  });
        });

      });
      const form = document.getElementById("registration-form");
      //console.log(form)
           form.addEventListener("submit", (e) => {
            e.preventDefault();
        //console.log(form)
            let friendName = e.target.namebox.value;
            let friendGender = e.target.genderbox.value;
        //console.log(friendName)
            let newFriend = {
              name : friendName,
              gender : friendGender
            };
        //console.log(newFriend)
            fetch("http://localhost:3000/Friends", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newFriend),
            })
              .then((res) => res.json())
              .then((data) => {
                let name = document.createElement("h2");
                let gender = document.createElement("p");
                let button = document.createElement("button");
                button.textContent = "Delete";
        
                name.textContent = data.name;
                gender.textContent = data.gender;
        
                friendsDiv.appendChild(name);
                friendsDiv.appendChild(gender);
                friendsDiv.appendChild(button);
              });
          });
         
  });