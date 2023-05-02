## Browser EDvents

- Browser events are events that you track in the browser.  These events can be a variety of things, such as a click, a hover, a drag, etc.  For a full list of events that you can track, refer to: 

##  How to use Browser Events


1.  Select the element you want to attach an event to.  Remember, attaching an event to a browser element basically boils down to, if I do this event, this code will run. Most ofen times you see this in a click.
```
const buttonToClick = document.querySelector(".button");
```

2.  You can add an EventListener to your element.  For our case, we are going to add a click to a button.  