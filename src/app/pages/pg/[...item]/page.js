"use client "

import React from "react";

export default async function Page({ params }) {
  const { item } = await params;

  return (
    <div>
      <h1>Dynamic Value: {item}</h1>

    </div>
  );
}