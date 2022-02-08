const tabs = document.querySelector(".tabs");
const buttons = tabs.querySelectorAll('[role="tab"]');
const panels = tabs.querySelectorAll('[role="tabpanel"]');
const panelsList = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

handleTabClick = (e) => {
  //hide all tab panels
  panels.forEach((panel) => {
    panel.hidden = true;
  });
  //mark all tabs as unselected
  buttons.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });
  //mark the clicked tab as selected
  e.currentTarget.setAttribute("aria-selected", true);
  //find associated tabpanel and show it
  const id = e.currentTarget.id;
  /* Method ONE
    
    console.log(id);
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
    */
  //Method TWO- find in array of panels
  panelsList.find((item) => {
    if (item.getAttribute("aria-labelledby") === id) {
      item.hidden = false;
    } else {
      item.hidden = true;
    }
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", handleTabClick);
});
