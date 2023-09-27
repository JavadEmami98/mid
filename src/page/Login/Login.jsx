import { Box, Button, TextField, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import CachedIcon from "@mui/icons-material/Cached";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SecurityIcon from "@mui/icons-material/Security";
import InputIcon from "@mui/icons-material/Input";
import LaptopIcon from "@mui/icons-material/Laptop";
import React from "react";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            boxShadow:
              "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
            borderRadius: "4px",
          }}
        >
          {/* liste sefid */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: "15px",
              minWidth: "300px",
            }}
          >
            <img
              src="assest/images/login/mana.png"
              alt=""
              className="mana_pic"
            />
            <Typography sx={{ mt: "15px", fontSize: "17px" }}>
              سامانه مودیان مــانــا
            </Typography>
            <Box sx={{ display: "flex", mt: "15px" }}>
              <img
                src="assest/images/login/anydesk.png"
                alt=""
                className="aks-any"
              />
              <img
                src="assest/images/login/telegram.png"
                alt=""
                className="aks2"
              />

              <Typography sx={{ fontSize: "17px" }}>:پشتیبانی</Typography>
            </Box>
            <Typography sx={{ fontSize: "17px", color: "#20a8d8" }}>
              0910 810 10 67
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="assest/images/login/logo.png" alt="" className="logo" />
            </Box>
          </Box>
          {/* Form */}
          <Box sx={{ px: "15px", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#333333",
                padding: "16px",
                paddingBottom: "24px",
                height: "100%",
              }}
            >
              <Typography
                sx={{ color: "#fff", fontSize: "1.3125rem", mb: "6.5px" }}
              >
                {" "}
                خوش آمدید
              </Typography>
              <TextField
                id="outlined-basic"
                label="نام کاربری/کد ملی"
                variant="outlined"
                sx={{
                  height: "36px !important",
                  width: "100%",
                  borderRadius: "4px",
                  mb: "30px",
                  padding: "10px 5px",
                  background: "transparent",
                  fontSize: "14px",
                  color: "#ffffffde",
                  borderColor: "red !important",
                }}
              />
              <FormControl
                sx={{
                  height: "36px !important",
                  width: "100%",
                  borderRadius: "4px",
                  mb: "30px",
                  padding: "10px 5px",
                  background: "transparent",
                  fontSize: "14px",
                  color: "#ffffffde",
                  borderColor: "#ffffffde",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  رمز عبور
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="right">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="right"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <TextField
                id="outlined-basic"
                label="تصویر امنیتی"
                variant="outlined"
                sx={{
                  height: "36px !important",
                  width: "100%",
                  borderRadius: "4px",
                  mb: "30px",
                  padding: "10px 5px",
                  background: "transparent",
                  fontSize: "14px",
                  color: "#ffffffde",
                  borderColor: "#ffffffde",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  height: "60px",
                  border: "1px solid #b9b9b9",
                  borderRadius: "4px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "15px 20px",
                    cursor: "pointer",
                  }}
                >
                  <CachedIcon sx={{ color: "#03a9f4" }} />
                </Box>
                <img
                  src="assest/images/login/login_code.png"
                  alt=""
                  className="login_code"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  px: "15px",
                  my: "0.25rem",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    cursor: "pointer",
                    ":hover": {
                      background: "#2196f31c",
                    },
                    alignItems: "center",
                    color: "#2196f3",
                    fontSize: "11px",
                    padding: "6px 8px",
                  }}
                >
                  <Typography> ارسال/فراموشی رمز عبور </Typography>
                  <SecurityIcon sx={{ padding: "5px !important" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "#2196f3",
                    fontSize: "11px",
                    padding: "6px 8px",
                    borderRadius: "4px",
                    ":hover": {
                      background: "#2196f31c",
                    },
                  }}
                >
                  <Typography>ثبت نام مودی</Typography>
                  <CardMembershipIcon sx={{ padding: "5px !important" }} />
                </Box>
              </Box>
              <Box sx={{ px: "15px", my: "3.25px", width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    height: "31px",
                    fontSize: "11px",
                    width: "100%",
                    background: "#2196f3",
                  }}
                >
                  <LaptopIcon />
                  <Typography sx={{ mx: "3.25px" }}>ورود</Typography>
                  <InputIcon />
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  px: "15px",
                  my: "3.25px",
                  width: "100%",
                }}
              >
                <Typography sx={{ fontSize: "11px", px: "7px" }}>
                  Remember
                </Typography>
                <input type="checkbox" name="" id="" className="chekbox" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
