"use client";

import React from "react";
import { Chrono } from "react-chrono";
import { experience } from "@/data/data";

export default function Timeline() {
  return (
      <Chrono
        items={experience}
        mode="VERTICAL_ALTERNATING"
        disableToolbar
        classNames={{
          card: "my-card",
          cardMedia: "my-card-media",
          cardSubTitle: "my-card-subtitle",
          cardDetailedText: "my-card-text",
          cardTitle: "my-card-title",
          title: "my-title",
        }}
      />
  );
}
