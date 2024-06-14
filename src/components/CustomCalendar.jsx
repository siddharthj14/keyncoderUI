import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CustomCalendar = ({ theme }) => {
  const [events, setEvents] = useState([
    {
      title: "JAVA: Bitwise Operator",
      start: new Date(2024, 4, 15, 7, 30),
      end: new Date(2024, 4, 15, 9, 0),
    },
  ]);

  const onEventDrop = ({ event, start, end }) => {
    const updatedEvents = events.map((existingEvent) =>
      existingEvent.title === event.title
        ? { ...existingEvent, start, end }
        : existingEvent
    );
    setEvents(updatedEvents);
  };

  return (
    <div className="calendar-container mt-20 ml-10 bg-gradient-to-b from-[#FA5D2C] to-[#FDE4DD] rounded-3xl">
      <DndProvider backend={HTML5Backend}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="day"
          views={["day"]}
          step={30}
          timeslots={1}
          min={new Date(2024, 4, 15, 7, 0)}
          max={new Date(2024, 4, 15, 23, 59)}
          style={{ height: "40vh", width: "45vw" }}
          onEventDrop={onEventDrop}
          draggableAccessor={() => true}
          defaultDate={new Date()}
          components={{
            toolbar: CustomToolbar,
          }}
        />
      </DndProvider>
    </div>
  );
};

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToCurrent = () => {
    toolbar.onNavigate("TODAY");
  };

  return (
    <div className="rbc-toolbar ">
      <span className="rbc-btn-group ml-5 mt-2">
        <button onClick={goToBack}>Back</button>
        <button onClick={goToCurrent}>Today</button>
        <button onClick={goToNext}>Next</button>
      </span>
      <span className="rbc-toolbar-label">
        {moment(toolbar.date).format("MMMM Do YYYY")}
      </span>
    </div>
  );
};

export default CustomCalendar;
