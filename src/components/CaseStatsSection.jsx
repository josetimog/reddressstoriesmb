import React from "react";
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

// Converted data
const data = [
  { year: "1947", cases: 1 },
  { year: "1958", cases: 1 },
  { year: "1960", cases: 1 },
  { year: "1961", cases: 1 },
  { year: "1968", cases: 1 },
  { year: "1970", cases: 4 },
  { year: "1971", cases: 2 },
  { year: "1974", cases: 2 },
  { year: "1975", cases: 4 },
  { year: "1976", cases: 1 },
  { year: "1977", cases: 2 },
  { year: "1978", cases: 2 },
  { year: "1980", cases: 2 },
  { year: "1981", cases: 1 },
  { year: "1983", cases: 2 },
  { year: "1984", cases: 1 },
  { year: "1985", cases: 2 },
  { year: "1987", cases: 7 },
  { year: "1988", cases: 6 },
  { year: "1989", cases: 5 },
  { year: "1990", cases: 5 },
  { year: "1991", cases: 11 },
  { year: "1992", cases: 4 },
  { year: "1993", cases: 6 },
  { year: "1994", cases: 2 },
  { year: "1995", cases: 1 },
  { year: "1996", cases: 12 },
  { year: "1997", cases: 6 },
  { year: "1998", cases: 7 },
  { year: "1999", cases: 7 },
  { year: "2000", cases: 5 },
  { year: "2001", cases: 5 },
  { year: "2002", cases: 7 },
  { year: "2003", cases: 10 },
  { year: "2004", cases: 13 },
  { year: "2005", cases: 8 },
  { year: "2006", cases: 5 },
  { year: "2007", cases: 7 },
  { year: "2008", cases: 6 },
  { year: "2009", cases: 14 },
  { year: "2010", cases: 11 },
  { year: "2011", cases: 13 },
  { year: "2012", cases: 12 },
  { year: "2013", cases: 11 },
  { year: "2014", cases: 10 },
  { year: "2015", cases: 7 },
  { year: "2016", cases: 7 },
  { year: "2017", cases: 5 },
  { year: "2018", cases: 15 },
  { year: "2019", cases: 11 },
  { year: "2020", cases: 13 },
  { year: "2021", cases: 10 },
  { year: "2022", cases: 21 },
  { year: "2023", cases: 22 },
  { year: "2024", cases: 24 },
  { year: "2025", cases: 5 },
];

export default function CaseStatsSection() {
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
          24 reported cases in 2024 alone
        </Typography>
      </Container>
    </Box>
  );
}
