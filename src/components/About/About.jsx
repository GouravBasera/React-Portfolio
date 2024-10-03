import React from "react"

export default function About(){
    return (
        <>
        <hr className="h-px bg-[#484848] border-0"/>
        <div className="text-white mt-20 h-screen flex w-[80%] mx-auto justify-between">
            <div className="bebas text-8xl">About Me</div>
            <div className="w-[60%]">
                <h2 className="manrope leading-[140%] text-3xl mb-4">I am a front-end developer based in Sydney. Has Mechanical Engineering background.</h2>
                <p className="manrope leading-[150%] text-[#C7C7C7] text-lg">I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
            </div>
        </div>
        <hr className="h-px bg-[#484848] border-0"/>
        </>
    )
}