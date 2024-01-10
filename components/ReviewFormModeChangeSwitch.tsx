'use client'

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
 
export function SwitchDemo() {
    const searchParams = useSearchParams();// URLの検索パラメータを管理するフック
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);

  const handleSwitchChange = (e: any) => {
    if(e) {
      params.set("mode", "manual")
    } else {
      params.set("mode", "auto")
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative w-full mb-5">
      <div className="flex items-center space-x-2 absolute -top-5 right-0" >
        <Switch id="mode-switch" onCheckedChange={handleSwitchChange} checked={params.get("mode") === "manual"} />
        <Label htmlFor="mode-switch">手動で入力</Label>
    </div>
    </div>
  )
}