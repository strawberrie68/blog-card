import room from "@/app/images/room.jpg"
import Image from "next/image"
import { MdArrowForward } from "react-icons/md"


const BlogCard = () => {
    return (
        <article className="w-[340px] flex flex-col bg-white rounded-lg">
            <figure className="overflow-hidden rounded-t-lg h-[288px]">
                <Image
                    src={room}
                    alt="Cozy living room."
                    className="object-cover w-full h-full"
                />
            </figure>
            <div className="flex flex-col gap-3 self-stretch px-4 py-6">
                <div className="flex flex-col gap-2 self-stretch">
                    <div className="flex gap-2">
                        <span
                            className="font-normal text-sm text-center text-green-700 inline-block items-center bg-green-50 px-2 rounded-full border border-solid border-green-200"
                            aria-label="Category"
                            role="status"
                        >
                            Interior
                        </span>
                    </div>
                    <figcaption
                        id="blog-title"
                        className="font-semibold text-lg text-neutral-900 text-ellipsis"
                    >
                        Top 5 Living Room Inspirations
                    </figcaption>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-medium text-base text-neutral-600 line-clamp-2">Curated vibrants colors for your living, make it pop & calm in the same time.</p>
                    <button
                        className="flex min-h-11 items-center gap-3"
                        aria-label="Read more about living room inspirations"
                    >
                        <span className="font-medium text-base text-indigo-700">Read More</span>
                        <MdArrowForward
                            color={"#4338ca"}
                            size={20}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </article>
    )

}

export default BlogCard