"use client";
import React, { useState, useEffect } from "react";
import { format, addDays, isSameDay, isBefore, startOfToday } from "date-fns";

const DateTimePicker = ({ field, formData, handleChange }) => {
  const { name, label, required } = field;
  const [selectedDate, setSelectedDate] = useState(
    formData[`${name}_date`] || "",
  );
  const [selectedTime, setSelectedTime] = useState(
    formData[`${name}_time`] || "",
  );
  const [selectedTimezone, setSelectedTimezone] = useState(
    formData[`${name}_timezone`] ||
      Intl.DateTimeFormat().resolvedOptions().timeZone,
  );
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  // টাইম জোন লিস্ট
  const timezones = [
    { label: "(GMT-12:00) International Date Line West", value: "Etc/GMT+12" },
    { label: "(GMT-11:00) Midway Island, Samoa", value: "Pacific/Midway" },
    { label: "(GMT-10:00) Hawaii", value: "Pacific/Honolulu" },
    { label: "(GMT-09:00) Alaska", value: "America/Anchorage" },
    {
      label: "(GMT-08:00) Pacific Time (US & Canada)",
      value: "America/Los_Angeles",
    },
    {
      label: "(GMT-07:00) Mountain Time (US & Canada)",
      value: "America/Denver",
    },
    {
      label: "(GMT-06:00) Central Time (US & Canada)",
      value: "America/Chicago",
    },
    {
      label: "(GMT-05:00) Eastern Time (US & Canada)",
      value: "America/New_York",
    },
    { label: "(GMT-04:00) Atlantic Time (Canada)", value: "America/Halifax" },
    {
      label: "(GMT-03:00) Buenos Aires, Georgetown",
      value: "America/Argentina/Buenos_Aires",
    },
    { label: "(GMT-02:00) Mid-Atlantic", value: "Atlantic/South_Georgia" },
    {
      label: "(GMT-01:00) Azores, Cape Verde Islands",
      value: "Atlantic/Azores",
    },
    {
      label: "(GMT+00:00) London, Dublin, Edinburgh, Lisbon",
      value: "Europe/London",
    },
    { label: "(GMT+01:00) Berlin, Paris, Rome, Madrid", value: "Europe/Paris" },
    { label: "(GMT+02:00) Athens, Istanbul, Cairo", value: "Europe/Athens" },
    { label: "(GMT+03:00) Moscow, Baghdad, Kuwait", value: "Europe/Moscow" },
    { label: "(GMT+04:00) Dubai, Baku, Tbilisi", value: "Asia/Dubai" },
    {
      label: "(GMT+05:00) Karachi, Tashkent, Islamabad",
      value: "Asia/Karachi",
    },
    {
      label: "(GMT+05:30) India Standard Time (Kolkata, Mumbai, Delhi)",
      value: "Asia/Kolkata",
    },
    { label: "(GMT+06:00) Dhaka, Almaty, Novosibirsk", value: "Asia/Dhaka" },
    { label: "(GMT+07:00) Bangkok, Jakarta, Hanoi", value: "Asia/Bangkok" },
    {
      label: "(GMT+08:00) Singapore, Kuala Lumpur, Beijing",
      value: "Asia/Singapore",
    },
    { label: "(GMT+09:00) Tokyo, Seoul, Osaka", value: "Asia/Tokyo" },
    { label: "(GMT+10:00) Sydney, Melbourne, Guam", value: "Australia/Sydney" },
    {
      label: "(GMT+11:00) New Caledonia, Solomon Islands",
      value: "Pacific/Guadalcanal",
    },
    {
      label: "(GMT+12:00) Fiji, Auckland, Wellington",
      value: "Pacific/Auckland",
    },
  ];

  // সময়ের অপশন (30 মিনিট ব্যবধানে)
  const timeSlots = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      const hour = i.toString().padStart(2, "0");
      const minute = j.toString().padStart(2, "0");
      timeSlots.push(`${hour}:${minute}`);
    }
  }

  // ক্যালেন্ডারের জন্য মাসের দিনগুলো জেনারেট করা
  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // আগের মাসের শেষ কয়েক দিন
    const startDay = firstDay.getDay(); // 0 = Sunday
    for (let i = startDay; i > 0; i--) {
      const date = new Date(year, month, 1 - i);
      days.push({ date, isCurrentMonth: false });
    }

    // বর্তমান মাসের দিন
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      days.push({ date, isCurrentMonth: true });
    }

    // পরের মাসের প্রথম কয়েক দিন
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      days.push({ date, isCurrentMonth: false });
    }

    return days;
  };

  const handleDateSelect = (date) => {
    if (isBefore(date, startOfToday())) return;
    const formattedDate = format(date, "yyyy-MM-dd");
    setSelectedDate(formattedDate);
    handleChange(`${name}_date`, formattedDate);
    setShowCalendar(false);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    handleChange(`${name}_time`, time);
  };

  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
    handleChange(`${name}_timezone`, e.target.value);
  };

  // প্যারেন্ট কম্পোনেন্টে সব ডেটা একসাথে পাঠানো
  useEffect(() => {
    if (selectedDate && selectedTime && selectedTimezone) {
      const meetingData = {
        date: selectedDate,
        time: selectedTime,
        timezone: selectedTimezone,
        formattedDateTime: `${selectedDate} ${selectedTime} (${selectedTimezone})`,
      };
      handleChange(name, meetingData);
    }
  }, [selectedDate, selectedTime, selectedTimezone]);

  return (
    <div className='mb-6'>
      {label && (
        <label className='block text-gray-700 font-semibold mb-2 text-sm tracking-wide'>
          {label} {required && <span className='text-[#633826]'>*</span>}
        </label>
      )}

      {/* তারিখ সিলেক্টর */}
      <div className='mb-4'>
        <label className='block text-gray-600 text-sm mb-1'>Select Date</label>
        <div className='relative'>
          <input
            type='text'
            readOnly
            value={
              selectedDate ? format(new Date(selectedDate), "MMMM d, yyyy") : ""
            }
            placeholder='Click to select date'
            onClick={() => setShowCalendar(!showCalendar)}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors cursor-pointer bg-white'
          />
          <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
            📅
          </span>
        </div>

        {/* ক্যালেন্ডার ড্রপডাউন */}
        {showCalendar && (
          <div className='absolute z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80'>
            {/* মাস এবং বছর হেডার */}
            <div className='flex justify-between items-center mb-4'>
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() - 1,
                    ),
                  )
                }
                className='p-1 hover:bg-gray-100 rounded-full'>
                ←
              </button>
              <span className='font-semibold'>
                {format(currentMonth, "MMMM yyyy")}
              </span>
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() + 1,
                    ),
                  )
                }
                className='p-1 hover:bg-gray-100 rounded-full'>
                →
              </button>
            </div>

            {/* সপ্তাহের নাম */}
            <div className='grid grid-cols-7 gap-1 mb-2'>
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div
                  key={day}
                  className='text-center text-xs font-semibold text-gray-500'>
                  {day}
                </div>
              ))}
            </div>

            {/* ক্যালেন্ডারের দিনগুলো */}
            <div className='grid grid-cols-7 gap-1'>
              {getDaysInMonth().map((day, index) => {
                const isToday = isSameDay(day.date, new Date());
                const isSelected =
                  selectedDate && isSameDay(day.date, new Date(selectedDate));
                const isPast = isBefore(day.date, startOfToday());
                const isDisabled = isPast || !day.isCurrentMonth;

                return (
                  <button
                    key={index}
                    onClick={() => !isDisabled && handleDateSelect(day.date)}
                    disabled={isDisabled}
                    className={`
                      p-2 text-sm rounded-full transition-colors
                      ${!day.isCurrentMonth ? "text-gray-300" : ""}
                      ${isToday ? "bg-[#633826] text-white" : ""}
                      ${isSelected ? "bg-[#633826] text-white" : ""}
                      ${!isDisabled && !isSelected && !isToday ? "hover:bg-gray-100" : ""}
                      ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                    `}>
                    {format(day.date, "d")}
                  </button>
                );
              })}
            </div>

            {/* বর্তমান দিনে যাওয়ার বাটন */}
            <button
              onClick={() => {
                handleDateSelect(new Date());
                setCurrentMonth(new Date());
              }}
              className='mt-3 text-sm text-[#633826] hover:underline w-full text-center'>
              Go to Today
            </button>
          </div>
        )}
      </div>

      {/* সময় সিলেক্টর */}
      <div className='mb-4'>
        <label className='block text-gray-600 text-sm mb-1'>Select Time</label>
        <select
          value={selectedTime}
          onChange={(e) => handleTimeSelect(e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors bg-white'>
          <option value=''>Select a time</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* টাইম জোন সিলেক্টর */}
      <div className='mb-4'>
        <label className='block text-gray-600 text-sm mb-1'>Time Zone</label>
        <select
          value={selectedTimezone}
          onChange={handleTimezoneChange}
          className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors bg-white'>
          {timezones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>

      {/* {selectedDate && selectedTime && selectedTimezone && (
        <div className='mt-4 p-3 bg-green-50 border border-green-200 rounded-lg'>
          <p className='text-sm text-green-700 flex items-center gap-2'>
            <span>✅</span>
            <span>Meeting scheduled for: </span>
            <span className='font-semibold'>
              {format(new Date(selectedDate), "PPP")} at {selectedTime}
            </span>
          </p>
          <p className='text-xs text-green-600 mt-1'>
            Timezone:{" "}
            {timezones.find((tz) => tz.value === selectedTimezone)?.label ||
              selectedTimezone}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default DateTimePicker;
