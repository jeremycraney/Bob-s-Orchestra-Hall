import moment from "moment";
import PropTypes from "prop-types";
import "./EventCard.css";

const EventCard = (props) => {
  const { title, type, dates, description, coverImage } = props;

  const formatDate = (date) => {
    return moment(date).format("MMMM DD, YYYY, h:mm A");
  };

  return (
    <div className="event-card">
      <div className="event-cover">
        <img src={coverImage} alt={title} className="cover-image" />
      </div>
      <div className="event-data">
        <div className="event-date">
          {/* here I have showed the strting date of the booking */}
          <span className="event-day">{moment(dates[0]).format("ddd")}</span>
          {moment(dates[0]).format("DD")}
        </div>
        <div className="event-info">
          <p className="event-title">{title}</p>
          <p className="event-type">Event Type: {type}</p>
          <p className="event-date-string">
            <span style={{ color: "black" }}>Date: </span>
            {dates.map((date, index) => {
              if (index !== 0) return `, ${formatDate(date)}`;
              return formatDate(date);
            })}
          </p>
          <p className="event-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
};

export default EventCard;
