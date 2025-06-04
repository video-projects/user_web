import { IoHeart } from "react-icons/io5";

const Comment = () => {

    const comments = [
        {
            id: 1,
            user: {
                name: 'ماهان کبیر',
                image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
            },
            published_at: '۱۳ فروردین ۱۴۰۴',
            like: '۳۴',
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
        },
        {
            id: 2,
            user: {
                name: 'نیلوفر رحیمی‌زاده',
                image: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg'
            },
            published_at: '۱۲ خرداد ۱۴۰۴',
            like: '۴۲',
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
        },
        {
            id: 3,
            user: {
                name: 'رامین رضاییان',
                image: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
            },
            published_at: '۱۲ اسنفد ۱۴۰۳',
            like: '۸',
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
        },
    ]
    return (
        <div className="overflow-y-scroll scroll-hidden h-96">
            {comments && comments.map((comment) => (
                <div key={comment.id} className="bg-stone-900 px-4 py-2 my-4 lg:my-4 w-11/12 mx-auto
                        text-cyan-400
                        rounded-2xl
                        transition-all duration-200
                        shadow-[0_0_4px_#06b6d4,0_0_10px_#06b6d4,0_0_4px_#06b6d4,0_0_4px_#06b6d4,0_0_4px_#06b6d4]
                        hover:shadow-[0_0_8px_#06b6d4,0_0_8px_#06b6d4,0_0_8px_#06b6d4,0_0_8px_#06b6d4,0_0_8px_#06b6d4]"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img
                                className="rounded-lg"
                                src={comment.user.image}
                                alt="avatar"
                                width="42"
                            />
                            <div className="mx-1">
                                <div className="text-stone-50 text-xl font-bold">
                                    <label>{comment.user.name}</label>
                                </div>
                                <div className="text-stone-300 text-sm">
                                    <span>{comment.published_at}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-stone-300">
                            <span>{comment.like}</span>
                            <IoHeart size={24} />
                        </div>
                    </div>
                    <p className="py-3 text-justify text-stone-300">
                        {comment.text}
                    </p>
                </div>
            ))}
        </div>
    );
}
export default Comment;