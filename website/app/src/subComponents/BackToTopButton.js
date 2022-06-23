import React from 'react';

function BackToTopButton() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <img
                src="http://localhost:1337/uploads/go_To_Top_Out_f1816c091a.png?updated_at=2022-06-23T13:21:41.285Z"
                onMouseOver={e => (e.currentTarget.src = "http://localhost:1337/uploads/go_To_Top_In_d6983031a4.png?updated_at=2022-06-23T13:20:27.731Z")}
                onMouseOut={e => (e.currentTarget.src = "http://localhost:1337/uploads/go_To_Top_Out_f1816c091a.png?updated_at=2022-06-23T13:21:41.285Z")}
                width="92"
                height="112"
                className=""
                alt="Scroll To Top"
                onClick={scrollUp}
            />
        </>
    );
}

export default BackToTopButton;
