import React from "react";

interface IProps {
  left: number;
  right: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TrackProgress = ({ left, right, onChange }: IProps) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="range" min={0} max={right} value={left} onChange={onChange} />
      <div style={{ display: "flex", alignItems: "center", width: "60px" }}>
        <p style={{ width: "30px", textAlign: "right" }}> {left}</p>/<p style={{ width: "30px" }}>{right}</p>
      </div>
    </div>
  );
};
