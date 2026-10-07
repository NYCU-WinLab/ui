import {
  PageHeader,
  SectionHeader,
} from "@/registry/winlab/blocks/page-header/page-header"
import { Button } from "@/registry/winlab/ui/button"

export function Demo() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-12 text-left">
      <PageHeader title="收據" actions={<Button>上傳收據</Button>} />
      <SectionHeader
        title="審核中"
        actions={<Button variant="outline">全部下載</Button>}
      />
    </div>
  )
}
