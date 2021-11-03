export const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export const setSelectedValue = (selectControlId, value) => {
    const selectControl = document.getElementById(selectControlId);

    for (var i = 0; i < selectControl.options.length; ++i) {
      if (selectControl.options[i].value === value) {
        selectControl.options[i].selected = true;
      }
    }
}

export const hideFormElements = (hideElements, formElementIds) => {
  formElementIds.forEach(elementId => {
    const formElement = document.getElementById(elementId);
    formElement.style.display = hideElements ? "none" : "grid";
  });
}