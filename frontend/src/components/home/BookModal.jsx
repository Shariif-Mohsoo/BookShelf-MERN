import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';


const BookModal = ({ book, onClose }) => {
    return (
        <div
            className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="w-[600px] max-w-full py-4 bg-white rounded-xl p-4 flex flex-col relative"
                onClick={(e) => e.stopPropagation()}
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">{book.publishYear}</h2>
                <h4 className="my-2 text-gray-500">{book._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className="my-1">{book.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className="my-1">{book.author}</h2>
                </div>
                <p className="my-2  ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat excepturi quae facere quis odio tempora soluta labore quod veritatis at placeat omnis voluptate et eaque facilis odit rerum similique, repellat dignissimos. Aliquid adipisci accusantium repellendus itaque soluta distinctio, veniam sapiente natus quod cupiditate, placeat quidem fugit exercitationem voluptate. Repudiandae quam deserunt molestias mollitia fugiat ad minus cum dolor nisi nulla labore deleniti consectetur, similique quisquam molestiae distinctio atque odio repellat, quas commodi porro. Molestiae, minima distinctio, ullam delectus placeat, cumque dignissimos asperiores maiores deleniti libero cum! Non, nisi praesentium recusandae corporis obcaecati, dignissimos sapiente ab dolorem molestiae, debitis saepe veniam.
                </p>
            </div>
        </div>
    )
}

export default BookModal