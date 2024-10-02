$(document).ready(function () {
  $(".navbar ul li:first").addClass("active");
  $(".navbar ul li").click(function () {
    $(".navbar ul li").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".sidebar ul li:first").addClass("active");
  $(".sidebar ul li").click(function () {
    $(".sidebar ul li").removeClass("active");
    $(this).addClass("active");
  });
});
function handleSide() {
  const sidebar = document.getElementById("sidebar");
  const sideOpen = document.getElementById("sideOpen");
  const sideClose = document.getElementById("sideClose");
  sidebar.style.width = "250px";
  sideOpen.style.display = "none";
  sideClose.style.display = "block";
  document.body.style.overflow = "hidden";
}
function handleSideClose() {
  const sidebar = document.getElementById("sidebar");
  const sideOpen = document.getElementById("sideOpen");
  const sideClose = document.getElementById("sideClose");
  sidebar.style.width = "0px";
  sideOpen.style.display = "flex";
  sideClose.style.display = "none";
  document.body.style.overflow = "";
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.getElementById("sideOpen").style.display = "none";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sideClose").style.display = "none";
  }
});

$(document).ready(function () {
  $(".section-box").hide();
  $(".section-box:first").show();
  $(".portfolio ul li:first").addClass("active");
  $(".portfolio ul li").click(function () {
    $(".portfolio ul li").removeClass("active");
    $(this).addClass("active");
    $(".section-box").hide();
    var showTab = $(this).find("a").attr("href");
    $(showTab).fadeIn();
    return false;
  });
});

function handleSubmit() {
  const nameValue = document.getElementById("demo").value;
  const emailValue = document.getElementById("demo1").value;
  const subjectValue = document.getElementById("demo2").value;
  const messageValue = document.getElementById("demo3").value;

  const nameError = document.getElementById("error");
  const emailError = document.getElementById("error1");
  const subjectError = document.getElementById("error2");
  const messageError = document.getElementById("error3");

  let inputValue = true;

  if (nameValue.trim() === "") {
    nameError.textContent = "This field is required";
    inputValue = false;
  } else {
    nameError.textContent = "";
  }

  if (emailValue.trim() === "") {
    emailError.textContent = "This field is required";
    inputValue = false;
  } else {
    emailError.textContent = "";
  }

  if (subjectValue.trim() === "") {
    subjectError.textContent = "This field is required";
    inputValue = false;
  } else {
    subjectError.textContent = "";
  }

  if (messageValue.trim() === "") {
    messageError.textContent = "This field is required";
    inputValue = false;
  } else {
    messageError.textContent = "";
  }

  if (inputValue) {
    document.getElementById("myForm").reset();
  }

  return inputValue;
}
