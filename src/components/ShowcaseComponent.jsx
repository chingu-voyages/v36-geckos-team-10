export const ShowcaseComponent = ({ heading, icon, content, image, num }) => {
    const changeClass = `items-center flex flex-col ${num === 1 ? "md:flex-row-reverse" : "md:flex-row"}`;
    return (
    <article className="container mx-auto px-4 py-8">
        <div className={changeClass}>
            <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0">
              <img src={image} alt="showcaseImg" />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-4">
                    <div className="text-red-600 text-3xl p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                       {icon()}
                    </div>
                    <h3 className="text-3xl font-semibold">{heading}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                       {content}
                    </p>
                </div>        
            </div>
        </div>
    </article>
    );
}

export default ShowcaseComponent