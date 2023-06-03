let header = document.querySelector("header");
let bars = document.querySelector("#menu-bars");
let cursor1 = document.querySelector(".cursor1");
let cursor2 = document.querySelector(".cursor2");

bars.onclick = () => {
  bars.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  bars.classList.remove("fa-times");
  header.classList.remove("active");
};

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

function SubForm(e) {
  e.preventDefault();
  console.log("Send A data using a post");
  fetch("https://api.apispreadsheets.com/data/ZfCc9oq1PhPfK3ET/", {
    method: "POST",
    body: JSON.stringify({
      data: {
        email: document.getElementById("emailId").value,
        message: document.getElementById("message").value,
        mobaile: document.getElementById("mobaile").value,
        full_name: document.getElementById("fname").value,
      },
    }),
  }).then((res) => {
    if (res.status === 201) {
      alert("message send");
    } else {
      alert("message not send");
    }
  });
}
