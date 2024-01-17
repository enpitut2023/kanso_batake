import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AspectRatio } from "../ui/aspect-ratio"
import Image from "next/image"

export function Modal({ imageUrl }: { imageUrl: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <Image src={imageUrl} alt="Image" fill className="rounded-md object-cover" />
          </AspectRatio>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <Image src={imageUrl} alt="Image" fill className="rounded-md object-cover" />
          </AspectRatio>
        </div>
      </DialogContent>
    </Dialog>
  )
}
