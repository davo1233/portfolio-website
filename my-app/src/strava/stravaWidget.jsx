import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StravaWidget = () => {
  const [totalDistance, setTotalDistance] = useState(null);

  useEffect(() => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const refreshToken = 'your_refresh_token'; // You need to obtain this token first

    const fetchTotalDistance = async () => {
      try {
        const response = await axios.post(
          `https://www.strava.com/oauth/token`,
          null,
          {
            params: {
              client_id: clientId,
              client_secret: clientSecret,
              refresh_token: refreshToken,
              grant_type: 'refresh_token',
            },
          }
        );

        const accessToken = response.data.access_token;

        const activityResponse = await axios.get(
          'https://www.strava.com/api/v3/athlete/activities',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const activities = activityResponse.data;
        const totalKilometers = activities.reduce(
          (total, activity) => total + activity.distance / 1000,
          0
        );

        setTotalDistance(totalKilometers.toFixed(2));
      } catch (error) {
        console.error('Error fetching data from Strava:', error);
      }
    };

    fetchTotalDistance();
  }, []);

  return (
    <div>
      <h2>Total Distance Ridden:</h2>
      {totalDistance !== null ? (
        <p>{totalDistance} kilometers</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StravaWidget;
