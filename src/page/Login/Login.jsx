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
import Tooltip from "@mui/material/Tooltip";
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
            overflow: "hidden",
          }}
        >
          {/* Form */}
          <Box sx={{ height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#333333",
                padding: "16px",
                paddingBottom: "24px",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{ color: "#fff", fontSize: "1.3125rem", mb: "6.5px" }}
              >
                خوش آمدید
              </Typography>
              <TextField
                id="outlined-basic"
                label="نام کاربری/کد ملی"
                variant="outlined"
                sx={{
                  height: "1.875rem",
                  width: "100%",
                  borderRadius: "4px",
                  mb: "30px",
                  padding: "10px 5px",
                  background: "transparent",
                  fontSize: "0.875rem",
                  color: "#ffffffde",
                  borderColor: "red !important",
                }}
              />
              <FormControl
                sx={{
                  height: "1.875rem",
                  width: "100%",
                  borderRadius: "4px",
                  mb: "30px",
                  padding: "10px 5px",
                  background: "transparent",
                  fontSize: "0.875rem",
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
                  height: "1.875rem",
                  width: "100%",
                  borderRadius: "4px",
                  mb: "30px",
                  padding: "10px 5px",
                  background: "transparent",
                  fontSize: "0.875rem",
                  color: "#ffffffde",
                  borderColor: "#ffffffde",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  height: "3.75rem",
                  border: "1px solid #b9b9b9",
                  borderRadius: "4px",
                  width: "100%",
                }}
              >
                {" "}
                <Box
                  component="img"
                  src="assest/images/login/login_code.png"
                  sx={{ height: "3.75rem", width: "100%", objectFit: "cover" }}
                ></Box>
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
                    alignItems: "center",
                    cursor: "pointer",
                    color: "#2196f3",
                    fontSize: "0.6875rem",
                    padding: "6px 8px",
                    borderRadius: "4px",
                    ":hover": {
                      background: "#2196f31c",
                    },
                  }}
                >
                  <CardMembershipIcon
                    sx={{ width: "18.5px", height: "18.5px" }}
                  />
                  <Typography sx={{ fontSize: "0.6875rem" }}>
                    ثبت نام مودی
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    cursor: "pointer",
                    ":hover": {
                      background: "#2196f31c",
                    },
                    alignItems: "center",
                    color: "#2196f3",
                    fontSize: "0.6875rem",
                    padding: "6px 8px",
                  }}
                >
                  <SecurityIcon sx={{ width: "18.5px", height: "18.5px" }} />
                  <Typography sx={{ fontSize: "0.6875rem" }}>
                    {" "}
                    ارسال/فراموشی رمز عبور{" "}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ px: "15px", my: "3.25px", width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    height: "1.9375rem",
                    fontSize: "0.6875rem",
                    width: "100%",
                    background: "#2196f3",
                  }}
                >
                  <InputIcon />
                  <Typography sx={{ mx: "3.25px" }}>ورود</Typography>
                  <LaptopIcon />
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: "15px",
                  my: "3.25px",
                  width: "100%",
                }}
              >
                <input type="checkbox" name="" id="" className="chekbox" />
                <Typography sx={{ fontSize: "0.6875rem", px: "7px" }}>
                  Remember
                </Typography>
              </Box>
            </Box>
          </Box>
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
            <Tooltip title="سامانه مودیان مــانــا ">
              <Box
                component="img"
                src="assest/images/login/mana.png"
                sx={{
                  height: "7rem",
                  objectFit: "cover",
                  width: "6.25rem",
                  cursor: "pointer",
                }}
              ></Box>
            </Tooltip>
            <Typography sx={{ mt: "15px", fontSize: "1.0625rem" }}>
              سامانه مودیان مــانــا
            </Typography>
            <Box sx={{ display: "flex", mt: "15px" }}>
              <Typography sx={{ fontSize: "1.0625rem" }}>پشتیبانی: </Typography>
              <Box
                component="img"
                src="assest/images/login/telegram.png"
                sx={{
                  height: "1.5rem",
                  width: "24px",
                  objectFit: "cover",
                  mr: "5px",
                }}
              ></Box>
              <Box
                component="img"
                src="assest/images/login/anydesk.png"
                sx={{
                  height: "1.5rem",
                  width: "24px",
                  objectFit: "cover",
                  mr: "2px",
                }}
              ></Box>
            </Box>
            <Typography
              sx={{
                fontSize: "1.0625rem",
                color: "#20a8d8",
                cursor: "pointer",
                fontWeight: "bold",
                ":hover": { color: "#2a8aac" },
              }}
            >
              0910 810 10 67
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tooltip title="ارسال صورتحساب به سامانه مودیان اداره دارایی">
                <Box
                  component="img"
                  src="assest/images/login/logo.png"
                  sx={{
                    mt: "13px",
                    mr: "5px",
                    height: { lg: "60px", md: "60px", sm: "32px", xs: "32px" },
                  }}
                ></Box>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
