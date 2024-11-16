import  satish  from "../assets/satish.jpeg";

const FounderCard = ({ imageSrc, name, jobTitle, rating }) => {
    return (
        <div className="flex flex-col items-center w-72 bg-white p-4 rounded-2xl shadow-lg hover:border hover:border-solid hover:border-black">
    <img
        className="object-cover h-[310px] w-full rounded-t-2xl hover:border hover:border-solid hover:border-black"
        src={imageSrc}
        alt={`Photo of ${name}`}
    />
            <div className="text-center mt-4">
                <h3 className="text-gray-900 text-2xl font-bold">{name}</h3>
                <p className="text-gray-600 text-sm">{jobTitle}</p>
                <button type="button" className="btn btn-outline mt-4 px-6 py-2 rounded-full border-gray-300">
                    View Profile <span className="ml-2">&rarr;</span>
                </button>
            </div>
        </div>
    );
};

const Blogs = () => {
    return (
        <section id="blog">
            <div className="container mx-auto py-8">
                <h2 className="relative section-title-after text-h2 text-gray-800 text-center mb-8">
                    Meet our cool Founders
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-6">
    <FounderCard
        imageSrc={satish}
        name="Satish Banchere"
        jobTitle="Master of Telegram Bot Shenanigans"
    />
    <FounderCard
        imageSrc="https://i.pinimg.com/736x/ca/75/a8/ca75a8c82185551918bcd09c7432aee1.jpg"
        name="Signal Internet"
        jobTitle="8-Year TG Veteran, Still Figuring It Out"
    />
</div>

            </div>
        </section>
    );
};

export default Blogs;
