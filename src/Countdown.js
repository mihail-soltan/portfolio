import React, { useState, useEffect } from "react";

function CountdownToFutureDate({ futureDate }) {
    const [remainingTime, setRemainingTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const timeDiff = futureDate.getTime() - Date.now();
            const timeDiffInSec = Math.floor(timeDiff / 1000);

            if (timeDiffInSec <= 0) {
                setRemainingTime("The future date has arrived!");
                clearInterval(interval);
                return;
            }

            const remainingDays = Math.floor(timeDiffInSec / 86400);
            const remainingHours = Math.floor((timeDiffInSec % 86400) / 3600);
            const remainingMins = Math.floor((timeDiffInSec % 3600) / 60);
            const remainingSecs = timeDiffInSec % 60;

            const remainingTimeStr = `${remainingDays}d ${remainingHours}h ${remainingMins}m ${remainingSecs}s`;

            setRemainingTime(remainingTimeStr);
        }, 1000);

        const timeLimit = futureDate.getTime() - Date.now() + 1000; // add 1 second to account for potential rounding errors
        setTimeout(() => clearInterval(interval), timeLimit);

        return () => clearInterval(interval);
    }, [futureDate]);

    const days = remainingTime.split(" ")[0];
    const hours = remainingTime.split(" ")[1];
    const mins = remainingTime.split(" ")[2];
    const secs = remainingTime.split(" ")[3];

    return (
        <div className="countdown-container">

                <h1>Closed down for maintenance.<br /> Grand Re-Opening in:</h1>
                <div className="countdown-timer">
                    <div className="countdown-item">
                        <div className="countdown-value" id="countdown-days">
                            {days}
                        </div>
                    </div>
                    <div className="countdown-item">
                        <div className="countdown-value" id="countdown-hours">
                            {hours}
                        </div>
                    </div>
                    <div className="countdown-item">
                        <div className="countdown-value" id="countdown-mins">
                            {mins}
                        </div>
                    </div>
                    <div className="countdown-item">
                        <div className="countdown-value" id="countdown-secs">
                            {secs}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CountdownToFutureDate;

    //   <h1>{remainingTime}</h1>