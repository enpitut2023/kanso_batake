import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export function Modal({ imageUrl }: { imageUrl: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-1/5">
            <Image
              alt="etc"
              src={imageUrl}
              width={1024}
              height={595}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
        </div>
      </DialogTrigger>
      <DialogContent className="w-4/5 h-4/5">
        <AspectRatio ratio={9/16}>
          <Image
              alt="etc"
              src={imageUrl}
              width={1024}
              height={595}
              style={{
                width: '100%',
                maxHeight: '100%',
              }}
              className="object-contain"
            />
        </AspectRatio>
      </DialogContent>
    </Dialog>
  );
}
