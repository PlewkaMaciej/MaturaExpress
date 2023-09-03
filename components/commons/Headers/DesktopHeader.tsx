import { Box, CardMedia, Typography } from "@mui/material";
import logo from "../../../public/myOrthos-straight.png";
import { CustomButton } from "../CustomButton";

const menuItems = ["O nas", "Zakup kurs", "Dlaczego nasz kurs?", "Kariera"];

const DesktopHeader = () => {
  return (
    <Box
      sx={{
        pt: "15px",
        display: "flex",
        justifyContent: "center",
        zIndex: 10,
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: "white",
          borderRadius: "57px",
          boxShadow: "0 4px 4px #0000000a",
          height: "250px",
          width: "90%",
          maxHeight: "10vh",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          pl: "25px",
          pr: "25px",
        }}
      >
        <CardMedia
          component="img"
          style={{
            height: "125px",
            width: "125px",
            objectFit: "contain",
            cursor: "pointer",
          }}
          image={logo.src}
          alt="Logo"
        />
        <Box sx={{ display: "flex", flexDirection: "row", gap: "100px" }}>
          {menuItems.map((items, index) => (
            <Typography
              key={index}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {items}
            </Typography>
          ))}
        </Box>
        <CustomButton
          sx={{
            width: "200px",
            padding: "0px",
            margin: "0px",
            height: "50px",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          text={"Załóż konto"}
        />
      </Box>
    </Box>
  );
};

export default DesktopHeader;
