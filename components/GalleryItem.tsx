import Image from 'next/image'
import Link from 'next/link'

interface Props {
  src: string,
  label?: string,
  link?: string,
}

const GalleryItem = (props: Props) => {
  return (
    <div className="h-96 bg-gray-50 w-full m-10 md:w-1/3 shadow-md gallery_item flex flex-col">
      <div className="bg-red-200 w-full h-4/5 relative">
        <Link href={"/" + props.link}>
          <a>
            <Image src={props.src} layout="fill" objectFit="cover"></Image>
          </a>

        </Link>
      </div>
      <div className="flex-1 flex flex-col items-center text align-middle content-center">
        <div className="pt-6 text-3xl">{props.label}</div>
        <div className="mt-2 underline font-light text-sm racking-tight">
          <Link href={"/" + props.link}>
            See more
          </Link>
        </div>
      </div>

      <style jsx>{`
        .gallery_item {
          height: 42rem;
          width: 28rem;
        }
      `}</style>

    </div>
  )
}

export default GalleryItem