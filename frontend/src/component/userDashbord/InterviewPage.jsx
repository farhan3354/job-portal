import React, { useState } from "react";
import { FiCalendar, FiClock, FiUser, FiVideo, FiMapPin } from "react-icons/fi";

const InterviewPage = () => {
  const [interviews] = useState([
    {
      id: 1,
      candidate: "John Doe",
      date: "2025-08-30",
      time: "10:00 AM",
      duration: "30 minutes",
      type: "Video Call",
      interviewer: "Jane Smith",
      location: "https://meet.google.com/abc-defg-hij",
      notes: "Discuss project experience and problem-solving approach.",
    },
    {
      id: 2,
      candidate: "Alice Johnson",
      date: "2025-09-02",
      time: "2:30 PM",
      duration: "45 minutes",
      type: "In-Person",
      interviewer: "Mark Wilson",
      location: "Company HQ, San Francisco",
      notes: "System design and cultural fit discussion.",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          My Interviews
        </h1>

        {interviews.length === 0 ? (
          <p className="text-gray-600">No interviews scheduled yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interviews.map((interview) => (
              <div
                key={interview.id}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {interview.candidate}
                </h2>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center">
                    <FiCalendar className="mr-2 text-blue-500" />
                    {interview.date}
                  </p>
                  <p className="flex items-center">
                    <FiClock className="mr-2 text-blue-500" />
                    {interview.time} • {interview.duration}
                  </p>
                  <p className="flex items-center">
                    <FiUser className="mr-2 text-blue-500" />
                    {interview.interviewer}
                  </p>
                  <p className="flex items-center">
                    {interview.type === "In-Person" ? (
                      <FiMapPin className="mr-2 text-blue-500" />
                    ) : (
                      <FiVideo className="mr-2 text-blue-500" />
                    )}
                    {interview.location}
                  </p>
                </div>

                {interview.notes && (
                  <p className="mt-4 text-gray-600 text-sm">
                    <strong>Notes:</strong> {interview.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewPage;
