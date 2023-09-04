import { Box, Typography, CardMedia } from "@mui/material";
import laptop from "../../public/laptop-png-one-day-code-school-from-additive-21.png";
import { useState, useEffect, useRef } from "react";

const ExampleLesson = () => {
  const [rotate, setRotate] = useState(-90);
  const [opacity, setOpacity] = useState(0.3);
  const [scale, setScale] = useState(0.8);

  const laptopRef = useRef(null);
  const videoId = "v4XiCU382Fs";
  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setRotate(0);
          setOpacity(1);
          setScale(1);

          observer.disconnect();
        }
      });
    };

    const options: IntersectionObserverInit = {
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (laptopRef.current) {
      observer.observe(laptopRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: "80px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "80px",
        }}
      >
        <Typography variant="h4" color={"white"}>
          Przykładowa Lekcja
        </Typography>
        <Box
          ref={laptopRef}
          sx={{
            position: "relative",
            width: "1000px",
            height: "500px",
            transform: `rotateX(${rotate}deg) scale(${scale})`,
            transformStyle: "preserve-3d",
            perspective: "1000px",
            opacity: opacity,
            right: "40%",
            transition: "transform 1s, opacity 1s, boxShadow 1s",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "800px", // upewnij się, że "400px%" to właściwa wartość. Wygląda to na błąd.
              height: "400px",
              zIndex: 1,
              objectFit: "contain",
            }}
            image={laptop.src}
            alt="Logo"
          />
          <iframe
            width="422px"
            height="250px"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: "4%",
              left: "19%",
              zIndex: 2,
            }}
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default ExampleLesson;
