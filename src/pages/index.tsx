import { Box, Typography, CardMedia } from "@mui/material";
import { CustomButton } from "../../components/commons/CustomButton";
import DesktopHeader from "../../components/commons/Headers/DesktopHeader";
import stripes from "../../public/cyrkiel__2_-removebg-preview.png";

import pytagoras from "../../public/trojkat-removebg-preview.png";
import book from "../../public/MathuraExpress-removebg-preview.png";
import { styled, keyframes } from "@mui/system";
import { useState, useEffect } from "react";
import AboutOurCourse from "../../components/AboutOwners/AboutOurCouse";
import ExampleLesson from "../../components/ExampleLesson/ExampleLesson";

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
const AnimatedBox = styled(Box)({
  animation: `${fadeInOutTopToBottom} 4s 1 linear`,
  position: "absolute",

  width: "100%",
  height: "100%",
  overflow: "hidden",
  willChange: "opacity, clip-path",
  zIndex: 2,
});
export default function Home() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const handleMouseMove = (event: globalThis.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;

    setCursorX(x);
    setCursorY(y);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, false);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
  
      <Box
        sx={{
          
          backgroundColor: "#172b3d",
          minHeight:"1400px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            background: "#F8F4F0",
            height: "1000px",
            borderRadius: "0 0 50px 50px",
            clipPath: "ellipse(90% 75% at 50% 0%)",
            zIndex: 1,
            position: "relative",
          }}
        >
          <AnimatedBox style={{ zIndex: 2 }}>
            <svg
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                right: 0,
                transform: "translateX(20%)",

                overflow: "hidden",
                zIndex: 20,
              }}
            >
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="14"
                d="M540.6 11.07c-12.25-2.5-24.79-3.87-37.25-4.05C502.28 7 500.2 7 500.12 7c-48.46 0-96.83 16.25-132.71 44.59-20.34 16.06-35.1 34.07-43.86 53.52-10.54 23.4-13.44 51.19-8.18 78.27 5.3 27.35 16.85 51.35 33.4 69.41 15.15 16.5 33.72 28.58 54.66 41.55l.57.35c18.95 11.74 38.55 23.87 54.4 39.08 15.7 15.06 27.1 34.01 32.99 54.82 12.23 43.21-1.95 88.3-36.11 114.86-17.4 13.53-37.76 22.08-58.86 24.71-4.02.5-8.14.76-12.23.76-17.43 0-35.76-4.5-57.7-14.15-4.23-1.86-8.5-3.79-12.63-5.66-21.28-9.63-43.28-19.58-68.29-23.56-10.51-1.67-21.39-2.52-32.34-2.52-16.68 0-33.46 1.94-49.87 5.77-49.13 11.48-93.44 39.21-121.56 76.08C13 602.63 1.51 648.55 9.45 694.18c8.14 46.82 34.4 87.63 72.03 111.96.24.15.35.27.37.31"
              ></path>
            </svg>
          </AnimatedBox>
          <Box sx={{ zIndex: 10 }}>
            <DesktopHeader />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "250px",
              left:"5%"
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "70%",
            
                zIndex: 1,
                objectFit: "contain",
                background: "none",
                transform: `translate(${-cursorX / 50}px, ${-cursorY / 50}px)`,
              }}
              image={book.src}
              alt="Logo"
            />
          </Box>
         
          <Box
            sx={{
              position: "absolute",
              top: "150px",
              right: "550px",
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "35%",
                zIndex: 1,
                objectFit: "contain",
                background: "none",
                transform: `translate(${-cursorX / 50}px, ${-cursorY / 50}px)`,
              }}
              image={pytagoras.src}
              alt="Logo"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "500px",
              left: "80%",
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "50%",
                zIndex: 1,
                objectFit: "contain",
                background: "none",
                transform: `translate(${-cursorX / 50}px, ${-cursorY / 50}px)`,
              }}
              image={stripes.src}
              alt="Logo"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: "12%",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              pr: "15%",
              pl: "15%",
              textAlign: "center",
              zIndex: 10,
              position: "relative",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, zIndex: 10 }}>
              <span style={{ color: "#239ED2" }}>MaturaExpress </span>
              <span style={{ color: "#2C292A" }}>
                - twoja gwarancja zdanej matury
              </span>
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2C292A", textAlign: "center" }}
            >
              Nasze kursy zapewniają kompleksowe materiały, dzięki którym zdanie
              matury staje się pewniejsze niż kiedykolwiek.
            </Typography>

            <CustomButton
              style={{ width: "200px" }}
              text={"Dowiedz się więcej"}
            />
          </Box>
        </Box>
        <AboutOurCourse />
      </Box>
    
        
      <ExampleLesson />
    
    </>
  );
}
