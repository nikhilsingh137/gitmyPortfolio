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

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $(".headerTop").addClass("fixed-header");
  } else {
    $(".headerTop").removeClass("fixed-header");
  }
});

$(window).scroll(function () {
  console.log($(window).scrollTop()); // Check the scroll position
});
