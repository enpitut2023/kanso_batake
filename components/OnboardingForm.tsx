"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { userType } from "@/constants"
import { useRef } from "react"
import { Check, ChevronsUpDown, Loader2 } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { setUser } from "@/actions/user.action"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
  username: z.string().min(1, {
    message: "名前を入力してください。",
  }),
  affiliation: z.string().min(1, {
    message: "所属を入力してください。",
  }),
  field: z.string().min(1, {
    message: "専門分野を入力してください。",
  }),
  role: z.string().min(1, {
    message: "学生/教員を選択してください。",
  }),
  url: z.string().optional()
})

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function OnboadingForm({ userId }: { userId: string }) {
  const isLoading = useRef(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    isLoading.current = true

    const userData: userType = {
      id: userId,
      name: data.username,
      affiliation: [data.affiliation],
      field: [data.field],
      role: data.role,
      works: [data.url || ""]
    }
    
    await setUser(userData)
    router.push("/")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>名前</FormLabel>
              <FormControl>
                <Input placeholder="名前を入力してください" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="affiliation"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>所属</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? frameworks.find(
                          (framework) => framework.value === field.value
                        )?.label
                        : "所属を選択"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[50vw] p-0">
                  <Command>
                    <CommandInput placeholder="Search affiliation..." />
                    <CommandEmpty>Not found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          value={framework.label}
                          key={framework.value}
                          onSelect={() => {
                            form.setValue("affiliation", framework.value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              framework.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>研究分野</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? frameworks.find(
                          (framework) => framework.value === field.value
                        )?.label
                        : "研究分野を選択"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[50vw] p-0">
                  <Command>
                    <CommandInput placeholder="Search field..." />
                    <CommandEmpty>Not found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          value={framework.label}
                          key={framework.value}
                          onSelect={() => {
                            form.setValue("field", framework.value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              framework.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>役職</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="役職を選択" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="教員">教員</SelectItem>
                  <SelectItem value="学生">学生</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="URLを入力してください" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {
          isLoading.current ?
            (
              <Button disabled>
                <Loader2 className="animate-spin" />
                Please wait
              </Button>
            ) : (
              <div className="flex flex-row gap-3">
                <Button type="submit" >Submit</Button>
              </div>
            )
        }
      </form>
    </Form>
  )
}