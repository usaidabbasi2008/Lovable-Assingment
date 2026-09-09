"use client "

import React from "react";

export default async function Page({ params }) {
  const { Id } = await params;

  return (
    <div>
      <h1>Dynamic Value: {Id}</h1>

    </div>
  );
}