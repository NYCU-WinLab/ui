import { FileTextIcon, ImageIcon, RotateCwIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/registry/winlab/ui/attachment"

export function Demo() {
  return (
    <AttachmentGroup className="w-full max-w-md">
      <Attachment>
        <AttachmentTrigger aria-label="開啟 收據-文具.pdf" />
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>收據-文具.pdf</AttachmentTitle>
          <AttachmentDescription>PDF · 240 KB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="移除">
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="uploading">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>發票照片.jpg</AttachmentTitle>
          <AttachmentDescription>上傳中 · 62%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>出差報告.docx</AttachmentTitle>
          <AttachmentDescription>不支援這種檔案</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="重試">
            <RotateCwIcon />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </AttachmentGroup>
  )
}
