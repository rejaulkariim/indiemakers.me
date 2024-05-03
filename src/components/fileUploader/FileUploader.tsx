/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable @next/next/no-img-element */

'use client';

import { useDropzone } from '@uploadthing/react/hooks';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { generateClientDropzoneAccept } from 'uploadthing/client';

import { convertFileToUrl } from '@/utils/utils';
import { ImagePlus } from 'lucide-react';

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex justify-center items-center bg-card h-20 w-20 cursor-pointer flex-col overflow-hidden rounded-xl border"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col py-5 text-grey-500">
          <ImagePlus />
        </div>
      )}
    </div>
  );
}
