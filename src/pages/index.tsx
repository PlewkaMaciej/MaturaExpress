import { Box, Typography, CardMedia } from "@mui/material";
import { CustomButton } from "../../components/commons/CustomButton";
import DesktopHeader from "../../components/commons/Headers/DesktopHeader";
import stripes from "../../public/40-409587_abstract-lines-lines-png-transparent-png.png";
export default function Home() {
  return (
    <>
      <Box
        sx={{
          height: "1000px",
          background: "linear-gradient(45deg, #333333 30%, #666666 90%)",
        }}
      >
        <Box
          sx={{
            background: "#F8F4F0",
            height: "100vh",
            borderRadius: "0 0 50px 50px",
            clipPath: "ellipse(90% 75% at 50% 0%)",
          }}
        >
          <DesktopHeader />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: "250px",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              <span style={{ color: "#239ED2" }}>MaturaExpress </span>
              <span style={{ color: "#2C292A" }}>
                - twoja gwarancja zdanej matury
              </span>
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2C292A", textAlign: "center" }}
            >
              Nasz kurs zapewnia kompleksowe materiały, dzięki którym zdanie
              matury staje się pewniejsze niż kiedykolwiek.
            </Typography>
            <CustomButton
              style={{ width: "200px" }}
              text={"Dowiedz się więcej"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
