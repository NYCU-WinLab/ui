"use client"

import { Consent } from "@/registry/winlab/blocks/consent/consent"

export function Demo() {
  return (
    // The demo has no server to post to, so it keeps the form on the page.
    <div onSubmitCapture={(event) => event.preventDefault()}>
      <Consent
        title="連接 Carrel"
        client="Claude Code (plugin:infrastructure:carrel)"
        access="以你的帳號權限管理 Carrel 資源。"
        note="登入會持續保留，關閉瀏覽器後仍可使用。你可以在 WinLab 帳號的應用程式頁面撤銷存取。"
        action="/oauth/consent"
        fields={{ consent: "demo" }}
      />
    </div>
  )
}
