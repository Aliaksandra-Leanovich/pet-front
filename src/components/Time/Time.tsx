import React, { useState, useEffect } from "react";

export const TimeTable: React.FC = () => {
  const [userTimeZone, setUserTimeZone] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [dataModifiedDate, setDataModifiedDate] = useState<string | null>("");

  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimeZone(userTimeZone);

    const currentDate = new Date();
    setCurrentDate(
      currentDate.toLocaleString("en-US", { timeZone: userTimeZone })
    );

    setDataModifiedDate(
      currentDate.toLocaleString("en-US", { timeZone: userTimeZone })
    );
  }, []);

  return (
    <div>
      <h1>Time</h1>
      <table>
        <tbody>
          <tr>
            <td>User's Time Zone:</td>
            <td>{userTimeZone}</td>
          </tr>
          <tr>
            <td>Current Date (User's Time Zone):</td>
            <td>{currentDate}</td>
          </tr>
          <tr>
            <td>Data Modification Date (User's Time Zone):</td>
            <td>{dataModifiedDate || "Not available"}</td>
          </tr>
          <tr>
            <td>Current Date (UTC):</td>
            <td>{new Date().toISOString()}</td>
          </tr>
          <tr>
            <td>Data Modification Date (UTC):</td>
            <td>
              {dataModifiedDate
                ? new Date(dataModifiedDate).toISOString()
                : "Not available"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
