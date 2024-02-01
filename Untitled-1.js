

function opentab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-links');

    tabContents.forEach(content => content.classList.remove('active-tab'));
    tabLinks.forEach(link => link.classList.remove('active-link'));

    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add('active-tab');

    const selectedTabLink = Array.from(tabLinks).find(link => link.textContent.toLowerCase() === tabName.toLowerCase());
    selectedTabLink.classList.add('active-link');
}



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  var clickedTab = event.currentTarget;
  clickedTab.classList.add("active-link");

  var targetTabContent = document.getElementById(tabname);
  targetTabContent.classList.add("active-tab");
}

