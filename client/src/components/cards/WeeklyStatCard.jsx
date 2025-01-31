import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";

const Card=styled.div`
flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title=styled.div`
font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;


const WeeklyStatCard = ({ data }) => {
  console.log("WeeklyStatCard Data:", data?.totalWeeksCaloriesBurnt);

  // Ensure data is present before passing it to the BarChart
  const weeks = data?.totalWeeksCaloriesBurnt?.weeks || [];
  const caloriesBurned = data?.totalWeeksCaloriesBurnt?.caloriesBurned || [];

  // Convert caloriesBurned to numbers
  const caloriesBurnedNumeric = caloriesBurned.map((calorie) => Number(calorie));

  // Debugging output to verify if weeks and caloriesBurned are correct
  console.log("Weeks:", weeks);
  console.log("Calories Burned:", caloriesBurnedNumeric);

  // If the weeks or caloriesBurned array is empty, log and return null
  if (weeks.length === 0 || caloriesBurnedNumeric.length === 0) {
    console.log("Data for the chart is not available.");
    return <p>No data available for Weekly Calories Burned</p>;
  }

  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      <BarChart
        xAxis={[{ scaleType: "band", data: weeks }]}
        series={[{ data: caloriesBurnedNumeric }]}
        height={300}
      />
    </Card>
  );
};


export default WeeklyStatCard;