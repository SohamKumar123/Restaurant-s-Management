import React from "react";

function BlogCard(props){
    let cardBlog=props.cardBlog;

  
    return (
        <div className="bg-black px-[30px] py-[30px] flex flex-col gap-4">
            <div className="overflow-hidden">
                <img src={cardBlog.image} className="w-full lg:w-[405px] h-[232px] blog-img"/>
            </div>
            <div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <img src={cardBlog.adminImg} className="w-[25px] h-[25px]"/>
                        <p className="text-[16px] text-white">{cardBlog.adminTitle}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={cardBlog.labelImg} className="w-[25px] h-[25px]" />
                        <p className="text-[16px] text-white">{cardBlog.labelTitle}</p>
                    </div>
                </div>
                <h2 className="text-[24px] text-[#FFFFFF]">{cardBlog.title}</h2>
                <p className="text-[18px] text-[#FFFFFFCC] leading-7">{cardBlog.description}</p>
                <div className="h-[.1rem] w-full bg-[#C6A87D] mt-[3%]"></div>
                <button className=" py-[5px]  text-[18px] text-[#C6A87D] mt-[3%]" ><a href="#">{cardBlog.button}</a></button>
            </div>
        </div>
    )
}

export default BlogCard;