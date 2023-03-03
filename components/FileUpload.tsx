import React, { ChangeEvent, ReactNode, useRef, useState } from "react";

interface IProps {
  setFile: any;
  accept: string;
  children: ReactNode;
  type?: "audio" | "picture";
  preview?: any;
  setPreview?: any;
}

export const FileUpload = ({ setFile, accept, children, type, preview, setPreview }: IProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(
        type === "picture"
          ? {
              ...preview,
              fileImage: file,
              imagePreviewUrl: reader.result,
            }
          : {
              ...preview,
              fileAudio: file,
              audio: reader.result,
            }
      );
    };

    reader.readAsDataURL(file as Blob);
  };
  console.log("a====>", preview);
  return (
    <div
      onClick={() => ref.current?.click()}
      style={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center" }}
    >
      <input type="file" accept={accept} style={{ display: "none" }} ref={ref} onChange={onChange} />
      <div>{children}</div>

      {type === "picture"
        ? preview.imagePreviewUrl && (
            <img style={{ height: "240px", width: "240px" }} src={(preview?.imagePreviewUrl as string) || ""} alt="" />
          )
        : preview.audio && (
            <>
              <p>{preview?.fileAudio?.name}</p>
              <audio src={preview.audio} style={{ marginTop: "24px" }} controls />
            </>
          )}
    </div>
  );
};
