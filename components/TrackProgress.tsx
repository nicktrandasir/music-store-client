import React from "react";

interface IProps {
  left: number | string;
  right: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TrackProgress = ({ left, right, onChange }: IProps) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="range" min={0} max={right} value={left} onChange={onChange} />
      <div style={{ display: "flex", alignItems: "center", width: "80px" }}>
        <p style={{ width: "40px", textAlign: "right", fontSize: "12px" }}> {left || 50}</p>/
        <p style={{ width: "40px", fontSize: "12px" }}>{right}</p>
      </div>
    </div>
  );
};
