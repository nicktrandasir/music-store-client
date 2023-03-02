import React, { ChangeEvent, ReactNode, useRef } from "react";

interface IProps {
  setFile: any;
  accept: string;
  children: ReactNode;
}

export const FileUpload = ({ setFile, accept, children }: IProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };
  return (
    <div onClick={() => ref.current?.click()}>
      <input type="file" accept={accept} style={{ display: "none" }} ref={ref} onChange={onChange} />
      {children}
    </div>
  );
};
