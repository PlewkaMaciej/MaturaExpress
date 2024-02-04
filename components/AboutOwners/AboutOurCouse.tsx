import { Box, Typography,CardMedia } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { useState, useEffect, useRef } from "react";
import stars from "../../public/Two_bright_yellow_stars_arranged_on_a_transparent__converted-removebg-preview.png";
import trophy from "../../public/A_trophy_outline_with_white_contours_on_a_black_ba_converted-removebg-preview.png";
import thirty from "../../public/416400187_1100807687604084_3113345086124072053_n-removebg-preview.png";
import arrow from "../../public/converted_arrow-removebg-preview.png";
const fadeInOutTopToBottom = keyframes`
  0% {
    opacity: 0;
    clip-path: inset(0% 0 100% 0);
  }
  100% {
    opacity: 1;
    clip-path: inset(0% 0 0 0);
  }
`;
interface AnimatedBoxProps {
  shouldAnimate: boolean;
}
const AnimatedBox = styled(Box)(({ shouldAnimate }: AnimatedBoxProps) => ({
  animation: shouldAnimate
    ? `${fadeInOutTopToBottom} 4s 1 linear forwards`
    : "none",
  position: "absolute",
  bottom: 40,
  width: "100%",
  height: "1000px",
  overflow: "hidden",
  willChange: "opacity, clip-path",
  zIndex: 1,
  opacity: 0, // Initially hidden
}));
const AboutOurCourse = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); 
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
    
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#172b3d",
    bottom:"20vh"
      }}
    >
   
      <AnimatedBox
        shouldAnimate={startAnimation}
        style={{ zIndex: 1, top: "6%", }}
      >
        <svg
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "90%",
            position: "absolute",
            right: 0,
            transform: "translateX(-40%)",
            
            overflow: "hidden",
            zIndex: 20,
          }}
        >
          <path
            fill="none"
            stroke="#a8ce57"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="14"
            d="M15.93 691.05c.03-.14.23-.3.71-.37.04 0 .09-.01.13-.02 25.06-3.22 46.18-16.37 62.77-39.08 16.58-22.68 25.75-49 26.53-76.09 1.34-47.02-24.77-91.04-50.02-133.62l-3.34-5.63c-12.97-21.92-25.32-43.44-33.78-65.61-9.41-24.65-13.29-49.47-11.52-73.75 1.79-24.6 9.47-48.18 22.23-68.2 13.4-21.03 31.12-35.37 52.67-42.61 10.27-3.45 21.59-5.21 33.63-5.21 16.24 0 33.37 3.1 50.9 9.22 25.61 8.93 50.15 24.15 75.03 46.53 10.34 9.3 20.48 19.41 30.28 29.18 31.46 31.38 64 63.83 112.74 80.63 15.38 5.3 31.95 8.1 47.91 8.1 12 0 23.28-1.56 33.51-4.65 24.45-7.37 41.37-25.57 46.42-49.92 6.75-32.51-5.88-64.43-18.09-95.3-6.24-15.77-12.69-32.08-16.18-47.82-5.26-23.74-2.74-45.48 7.47-64.61 9.65-18.07 26.09-34.35 48.87-48.37C574.59 19.35 630.25 7.3 704.98 7h2.84c13.34 0 27.73.36 44.01 1.11"
          ></path>
        </svg>
      </AnimatedBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          textAlign: "center",
          gap: "20px",
          zIndex: 3,
        }}
      >
        <Typography variant="h4" color={"white"}>
          Dlaczego akurat nasz kurs?
        </Typography>
        <Box ref={boxRef} sx={{ background: "#F8F4F0", borderRadius: "50px" }}>
          <Typography variant="body1" color={"#172b3d"} sx={{ p: "50px" }}>
            Kurs maturalny Mathura to nasz flagowy produkt, stworzony z myślą o
            uczniach pragnących osiągnąć sukces na maturze z matematyki.
            Starannie zaprojektowany program kursu oferuje kompleksowe
            przygotowanie do egzaminu, łącząc teorię z praktyką. Z nami,
            matematyka staje się przystępna, a zdobycie wymarzonych punktów na
            maturze jest w zasięgu ręki. Wybierając kurs Mathura, stawiasz na
            jakość, doświadczenie i sprawdzone metody nauczania.
          </Typography>
        </Box>
        <Box sx={{position:"absolute", bottom:"58%",left:"70%"}}>
        <CardMedia
              component="img"
              style={{
                width: "35%",
                zIndex: 1,
                objectFit: "contain",
                background: "none",
                
              }}
              image={stars.src}
              alt="Logo"
            />
            </Box>
            
      </Box>
      <Box sx={{ position: "absolute", right: "80%", transform: "rotate(10deg)" }}>
  <CardMedia
    component="img"
    style={{
      width: "70%",
      zIndex: 1,
      objectFit: "contain",
      background: "none",
    }}
    image={trophy.src}
    alt="Logo"
  />
</Box>
<Box sx={{ position: "absolute", left:"80%",top:"40%", transform: "rotate(10deg)" }}>
  <CardMedia
    component="img"
    style={{
      width: "70%",
      zIndex: 1,
      objectFit: "contain",
      background: "none",
    }}
    image={thirty.src}
    alt="Logo"
  />
</Box>

 

    </Box>
    
  );
};
export default AboutOurCourse;
