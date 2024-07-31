console.log("vishal");
// gsap.to(
//     ".box",
    
//     {
//     x:500,
//     y:500,
//     duration:4,
//     delay:1,
//     backgroundColor: 'red',

//     }
// )

gsap.from(
    ".box",
    {
        x:500,
        y:500,
        // duration:1,
        // delay:1,
        backgroundColor: 'red',
        repeat:-1,
        yoyo:true,

    }
)