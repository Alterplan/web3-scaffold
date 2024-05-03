"use client";

import * as React from "react";
import { CounterNumber } from "./counter-number";
import { CounterIncrement } from "./counter-increment";
import { CounterSetNumber } from "./counter-setnumber";

export function Counter() {
  return (
    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-6 w-full mx-auto">
      <h1 className="font-bold">Counter</h1>
      <CounterNumber />
      <CounterIncrement />
      <CounterSetNumber />
    </div>
  );
}
