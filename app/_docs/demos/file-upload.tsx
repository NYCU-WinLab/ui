"use client"

import * as React from "react"

import { FileUpload } from "@/registry/winlab/blocks/file-upload/file-upload"

export function Demo() {
  const [files, setFiles] = React.useState<File[]>([])

  return (
    <FileUpload
      value={files}
      onValueChange={setFiles}
      accept=".pdf,image/*"
      acceptLabel="PDF、JPG、PNG"
      maxSize={10 * 1024 * 1024}
      multiple
      paste
      className="w-full max-w-md"
    />
  )
}
