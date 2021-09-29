import React, { useEffect } from 'react';
import { useDayzed } from 'dayzed';


/* Calendar Consts */
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const weekdays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

const Calendar = ({ calendars, getBackProps, getForwardProps, getDateProps }) => {

  // useEffect(() => calendars && console.log(calendars));

  return calendars.length ? (
    <div id="calendar-wrapper" className="max-w-max text-sm p-4 flex flex-col shadow-around rounded-md font-body text-gray-700">
      {
        calendars.map(calendar => (
          <>
            <div id="calendar-header" className="w-full h-10 flex flex-row items-center">
              <button id="previous-month" className="h-full w-10 shadow-around rounded-lg hover:bg-purple-100 active:bg-white transition-colors duration-300" {...getBackProps({ calendars })}>

              </button>
              <div id="current-month" className="flex-grow h-full flex items-center justify-center font-semibold subpixel-antialiased	">
                {months[ calendar.month ]} {calendar.year}
              </div>
              <button id="next-month" className="h-full w-10 shadow-around rounded-lg hover:bg-purple-100 active:bg-white transition-colors duration-300" {...getForwardProps({ calendars })}>

              </button>
            </div>
            <div id="calendar-body" className="w-full flex items-center justify-center flex-col">
              <div id="weekday" className="w-full grid grid-cols-7 h-10">
                {
                  weekdays.map(weekday => (
                    <div id="day" className="h-10 font-body flex items-center justify-center font-semibold text-gray-400">
                      {weekday}
                    </div>
                  ))
                }
              </div>
              <div id="weekday-in-date" className="w-full grid grid-rows-5">
              {
                calendar.weeks.map(week => (
                  <div className="w-full grid grid-cols-7 h-10">
                    {
                      week.map(dateObj => {
                        if (!dateObj) {
                          return (
                            <div className="">

                            </div>
                          )
                        }

                        const { date, selected, selectable, today, prevMonth, nextMonth } = dateObj;
                        let day_style = today ? ' rounded-full bg-purple-200' : '';
                        day_style = selected ? 'text-white bg-purple-500 rounded-full ' : day_style;
                        day_style = !selectable ? 'bg-red' : day_style;
                        day_style = prevMonth || nextMonth ? 'text-gray-400' : day_style;

                        return (
                          <button className={`${day_style} transition-all duration-300 w-10 h-10 font-body flex items-center justify-center font-semibold text-gray-700`} {...getDateProps({ dateObj })}>
                            {
                              selectable && date.getDate()
                            }
                          </button>
                        );
                      })
                    }
                  </div>
                ))
              }
              </div>
            </div>
          </>
        ))
      }
    </div>
  ) : null;
}

const DatePicker = props => {
  const dayzedData = useDayzed(props);

  return <Calendar {...dayzedData} />;
}

export default DatePicker;
