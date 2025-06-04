import React from 'react';
import HLSPlayer from "@/app/components/HLSPlayer/HLSPlayer";
import Comment from "@/app/components/Comment/Comment";
import Section from "@/app/components/Section/Section";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

const VideoPlayer = () => {
    return (
        <>
            <Header />
            <div className="justify-center flex">

                <HLSPlayer src="https://mahan-test.arvanvod.ir/LrGmxdm0q7/X04DK6wbGo/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/master.m3u8" />

            </div>
            <div className="lg:grid lg:grid-cols-12 mx-auto my-4 align-middle border-y border-stone-800">
                <div className="lg:col-span-6">
                    <Section />
                </div>
                <div className="lg:col-span-6">
                    <Comment />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default VideoPlayer;