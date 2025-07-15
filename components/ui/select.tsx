"use client";

import * as React from "react";

export function Select({ value, onValueChange, children }: any) {
  return (
    <select
      className="bg-zinc-800 text-white p-2 rounded-md border border-zinc-700"
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children }: any) {
  return <>{children}</>;
}

export function SelectValue() {
  return null;
}

export function SelectContent({ children }: any) {
  return <>{children}</>;
}

export function SelectItem({ value, children }: any) {
  return <option value={value}>{children}</option>;
}
