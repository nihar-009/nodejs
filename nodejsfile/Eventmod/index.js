const EventEmiter = require("events");
const event = new EventEmiter();

event.on("hy",()=>{
    console.log("test");
})

event.emit("hy");