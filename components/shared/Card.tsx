import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { cardTypes } from "../../assets/Constants";
import { useTheme } from "../../context/ThemeProvider";

function Card({ cardType, contents, titleImage, titleMessage, subTitleMessage, extraMessage, lastLineTitle, index }: {
    cardType: cardTypes;
    contents: string[];
    titleImage?: StaticImageData;
    titleMessage?: string;
    subTitleMessage?: string;
    extraMessage?: string;
    lastLineTitle?: string;
    index?: number
}) {
    const { darkTheme } = useTheme();

    if (cardType === cardTypes.LogoCard) {
        return (
            <div className="WhiteCard blur-thing-3xl p-4 sm:p-10 rounded-xl shadow-lg bg-white/20 blur-thing-2xl">
                <div className="w-full grid grid-cols-3 sm:grid sm:grid-cols-6 gap-[1rem] md:gap-[2rem]">
                    {contents.map((content, index) => (
                        <div
                            key={`logo-${titleMessage}-${index}`}
                            className="TW-LOGO-SKILL"
                        >
                            <Image
                                src={content}
                                height="70"
                                width="70"
                                layout="fixed"
                                alt={`logo-group1-${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (cardType === cardTypes.ImageTitleCard) {
        return (
            <div className="WhiteCard blur-thing-3xl justify-start">
                <Image
                    className="contrast-[0.9]"
                    src={titleImage!}
                    style={{ borderRadius: "12px 12px 0 0" }}
                    alt="front-end"
                />
                <h2 className="text-[2rem] font-[600] px-8">{ titleMessage }</h2>
                <div className="flex flex-col gap-2 px-8 pb-8">
                    {contents.map((content, index) => (
                        <div dangerouslySetInnerHTML={{ __html: content }} key={index}></div>)
                    )}
                </div>
            </div>
        );
    }

    if (cardType === cardTypes.BulletPointsCard) {
        return (
            <div className={`Card py-[3em] px-8 ${index! % 2 == 0 ? "BlackCard blur-thig-xl" : "WhiteCard blur-thing-3xl"} ${darkTheme ? "text-white" : undefined}`}>
                <div className="text-2xl font-bold text-center">
                    <div>{titleMessage}</div>
                </div>
                <div className="text-xl text-center">
                    {subTitleMessage ? <div>{subTitleMessage}</div> : undefined}
                    <div>{extraMessage}</div>
                </div>
                {contents.map((content, contentIndex) => (
                    <ul key={`content-${titleMessage}-${contentIndex}`} className="list-disc px-8">
                        <div>
                            {contentIndex === (contents.length - 1) && !!lastLineTitle ? (
                                <div>
                                    <br /><strong>{ lastLineTitle }</strong>
                                    <div>{content}</div>
                                </div>
                            ) : (
                                <li>
                                    {content}
                                </li>
                            )}
                        </div>
                    </ul>
                ))}
            </div>
        )
    }

    return <div>New Card Type</div>;
}

export default Card;
