function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".sidebar ul li").forEach(li => li.classList.remove("active"));
  event.currentTarget.classList.add("active");
}
