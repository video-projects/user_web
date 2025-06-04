import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";

const Section = () => {

    const list = [
        {
            id: 1,
            title: 'قسمت ۱',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۸۲',
            cover: 'https://static.cdn.asset.filimo.com/flmt/mov_153654_271944-b.jpg?width=300&quality=85&sharpen=80&secret=ZwokHTGsYWQOb2rEbjGY5g',
        },
        {
            id: 2,
            title: 'قسمت ۲',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۷۴',
            cover: 'https://static.cdn.asset.filimo.com/flmt/mov_153955_272631.jpg?width=300&quality=85&sharpen=80&secret=qL1GRWHPCNHRE4mtHGWd8Q',
        },
        {
            id: 3,
            title: 'قسمت ۳',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۱۵',
            cover: 'https://static.cdn.asset.filimo.com/flmt/mov_154190_276523.jpg?width=300&quality=85&sharpen=80&secret=g9Tpspmo0mY_w-zav06S1Q',
        },
        {
            id: 4,
            title: 'قسمت ۴',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۸۸',
            cover: 'https://static.cdn.asset.filimo.com/flmt/mov_154387_278201-b.jpg?width=300&quality=85&sharpen=80&secret=zKIaO7i6Yjge3EifVONLfA',
        },
        {
            id: 5,
            title: 'قسمت ۵',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۷۶',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWslH0L6SwHQrBEr-ADaRgPU0bUZ7FKbkLdw&s',
        },
        {
            id: 6,
            title: 'قسمت ۶',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۹۹',
            cover: 'https://www.doostihaa.com/img/uploads/2025/05/Tasiyan-S01E15.jpg',
        },
        {
            id: 7,
            title: 'قسمت ۷',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۲۳',
            cover: 'https://www.doostihaa.com/img/uploads/2025/04/Tasiyan-S01E07.jpg',
        },
        {
            id: 8,
            title: 'قسمت ۸',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۶۵',
            cover: 'https://static.cdn.asset.filimo.com/flmt/mov_156109_280814-b.jpg?width=300&quality=85&sharpen=80&secret=ERX_PgOpgPy9t9XUaA792g',
        },
        {
            id: 9,
            title: 'قسمت ۹',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۷',
            cover: 'https://www.doostihaa.com/img/uploads/2025/04/Tasiyan-S01E09.jpg',
        },
        {
            id: 10,
            title: 'قسمت ۱۰',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۱۱',
            cover: 'https://static.cdn.asset.filimo.com/flmt/mov_156651_282335-b.jpg?width=300&quality=85&sharpen=80&secret=3RxqPdY8RqBOBDDAoh6YfQ',
        },
        {
            id: 11,
            title: 'قسمت ۱۱',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۴۵',
            cover: 'https://sabzmedia.com/wp-content/uploads/2025/04/Tasian-Episode-11-Sabzmedia.com_.jpg',
        },
        {
            id: 12,
            title: 'قسمت ۱۲',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            uri: 'https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8',
            duration: '01:20:42',
            like: '۳۴',
            cover: 'https://static.cdn.asset.filimo.com/flmt/mov_157304_283629-b.jpg?width=300&quality=85&sharpen=80&secret=sQL0wOuhvSmxmtY-rQzuSQ',
        },
    ]
    return (
        <div className="overflow-y-scroll scroll-hidden h-96 lg:grid lg:grid-cols-6">
            {list && list.map((item) => (
                <div key={item.id} className="
                flex
                mx-auto
                bg-stone-900 my-4 w-11/12
                lg:col-span-3
                cursor-pointer
                text-cyan-400
                rounded-2xl
                transition-all duration-200
                shadow-[0_0_4px_#ec4899,0_0_4px_#ec4899,0_0_4px_#ec4899,0_0_4px_#ec4899]
                hover:shadow-[0_0_8px_#ec4899,0_0_8px_#ec4899,0_0_8px_#ec4899,0_0_8px_#ec4899]"
                >
                    <img src={item.cover} alt="cover" width="92" className="rounded-r-2xl" />
                    <div className="grid grid-rows-4">
                        <div className="row-span-1 text-xl mx-1 font-bold text-stone-50">
                            <label>{item.title}</label>
                        </div>
                        <div className="row-span-2 text-xs text-justify px-1 text-stone-300">
                            <p>{item.summary}</p>
                        </div>
                        <div className="row-span-1 flex items-center justify-end mx-2 text-stone-300">
                            <SlDislike className="me-1" /><span className="mx-2">|</span><span>{item.like}</span>
                            <SlLike className="ms-2" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Section;