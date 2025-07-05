import React, { useEffect, useState } from "react";
import victimData from "../data/markers.json";
import { Box, Typography, Container, Divider } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const startYear = 1947;
const endYear = 2025;

export default function CaseStatsSection() {
  const [data, setData] = useState([]);
  const [zeroCount, setZeroCount] = useState(0);

  useEffect(() => {
    const features = victimData.features || [];

    // Optional: deduplicate by victim ID
    const seenIds = new Set();
    const uniqueCases = features.filter((f) => {
      const id = f.properties.id;
      if (seenIds.has(id)) return false;
      seenIds.add(id);
      return true;
    });

    const yearCounts = {};
    uniqueCases.forEach((feature) => {
      const year = feature.properties.year;
      if (year >= startYear && year <= endYear) {
        yearCounts[year] = (yearCounts[year] || 0) + 1;
      }
    });

    const chartData = [];
    let zeros = 0;
    for (let year = startYear; year <= endYear; year++) {
      const count = yearCounts[year] || 0;
      if (count === 0) zeros++;
      chartData.push({ year: year.toString(), cases: count });
    }

    setData(chartData);
    setZeroCount(zeros);
  }, []);

  return (
    <Box sx={{ bgcolor: "#fbecec", py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 2, fontFamily: "'EB Garamond', serif" }}
        >
          A Growing Crisis
        </Typography>
        <Typography
          align="center"
          sx={{ color: "#333", mb: 4, fontFamily: "Lato, sans-serif" }}
        >
          Reports of missing and murdered Indigenous women, girls, and
          two-spirit people in Manitoba have steadily increased over time — with
          numbers rapidly rising since 2020.
        </Typography>

        <Box sx={{ height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" interval={4} angle={-45} textAnchor="end" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="cases"
                stroke="#d32f2f"
                strokeWidth={3}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography
          align="center"
          variant="h5"
          sx={{ fontWeight: "bold", color: "#d32f2f" }}
        >
          {data.find((d) => d.year === "2024")?.cases || 0} reported cases in
          2024 alone
        </Typography>

        <Typography
          align="center"
          sx={{
            mt: 2,
            fontFamily: "Lato, sans-serif",
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          {zeroCount} years between 1947 and 2025 had no reported cases.
        </Typography>
      </Container>
    </Box>
  );
}
