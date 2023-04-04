import { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Container, Row } from "reactstrap";

function AppointmentCalendar(props) {
  const [appointments, setAppointments] = useState([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.setOption("slotDuration", "01:00:00");
    calendarApi.setOption("minTime", "09:00:00");
    calendarApi.setOption("maxTime", "17:00:00");
    calendarApi.setOption("businessHours", {
      daysOfWeek: [1, 2, 3, 4, 5, 6],
      startTime: "09:00",
      endTime: "17:00",
    });
    setAppointments(loadAppointments());
  }, []);

  const handleSelect = (arg) => {
    const title = prompt("Enter appointment title:");
    if (title) {
      const start = arg.startStr;
      const end = arg.endStr;
      const newAppointment = { title, start, end };
      setAppointments((prevAppointments) => [
        ...prevAppointments,
        newAppointment,
      ]);
      localStorage.setItem(
        "appointments",
        JSON.stringify([...appointments, newAppointment])
      );
    }
  };

  const loadAppointments = () => {
    const storedAppointments = localStorage.getItem("appointments");
    return storedAppointments ? JSON.parse(storedAppointments) : [];
  };

  return (
    <Container>
      <Row className="py-5">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          selectable={true}
          select={handleSelect}
          events={loadAppointments()}
        />
      </Row>
    </Container>
  );
}

export default AppointmentCalendar;
