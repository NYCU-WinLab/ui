"use client"

import { Consent } from "@/registry/winlab/blocks/consent/consent"
import { Browser } from "@/registry/winlab/ui/browser"

export function Demo() {
  return (
    <Browser url="carrel.winlab.tw/oauth/consent" className="w-full">
      {/* A picture of the page: the form stays put. */}
      <div
        className="px-6 py-16"
        onSubmitCapture={(event) => event.preventDefault()}
      >
        <Consent
          title="連接 Carrel"
          client="Claude Code (plugin:infrastructure:carrel)"
          access="以你的帳號權限管理 Carrel 資源。"
          action="/oauth/consent"
        />
      </div>
    </Browser>
  )
}
