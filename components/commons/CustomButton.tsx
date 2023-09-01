import { Button, ButtonProps, Typography } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  text: string;
}

export const CustomButton = ({
  text,
  disabled,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        background: "#3CACE1",
        color: "#ffffff",
        width: "100%",
        mt: 2,
        height: "60px", // określa wysokość przycisku
        padding: "12px 20px", // dostosuj odległość wewnątrz przycisku
        borderRadius: "25px", // zaokrąglenie rogi przycisku
        "&:hover": {
          background: "#017AAE",
        },
      }}
      disabled={disabled}
      {...rest}
    >
      <Typography
        variant="button"
        style={{ fontWeight: 600, fontSize: "16px", textTransform: "none" }}
      >
        {text}
      </Typography>
    </Button>
  );
};
