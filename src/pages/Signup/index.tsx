import React, { useState } from "react";
import { Button, Container, TextField, Box } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { useFormik } from "formik";
import { useRouter } from "next/router";

function SignupPage() {
  const [showPassWord, setShowPassword] = useState<boolean>(false);
  const [showCpassword, setShowCpassword] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (values: any) => {
    console.log(values);
    if (
      formik.values.email &&
      formik.values.username &&
      formik.values.password
    ) {
      window.localStorage.setItem(
        "userData",
        // JSON.stringify(formik.values.email , formik.values.password)
        JSON.stringify(values)
      );
      router.push("/");
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      Cpassword: "",
    },
    onSubmit,
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#e4eafd",
              width: "100%",
              height: "58vh",
            }}
          >
            <Box width={"50%"}>
              <img src="/login.png" style={{ width: "70%" }} />
            </Box>
            <Box
              width={"50%"}
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "60%",
                }}
              >
                <TextField
                  type="text"
                  name="username"
                  placeholder="Enter User Name"
                  sx={{ mt: 2 }}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  variant="standard"
                  size="medium"
                  fullWidth
                />

                <TextField
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  sx={{ mt: 3 }}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  variant="standard"
                  size="medium"
                  fullWidth
                />
                <Box
                  sx={{ display: "flex", position: "relative", width: "100%" }}
                >
                  <TextField
                    type={showPassWord ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    sx={{ mt: 3 }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    variant="standard"
                    size="medium"
                    fullWidth
                  />
                  <Button
                    endIcon={<FingerprintIcon />}
                    sx={{ position: "absolute", right: -3, top: 20 }}
                    onClick={() => setShowPassword(!showPassWord)}
                  ></Button>
                </Box>
                <Box
                  sx={{ display: "flex", position: "relative", width: "100%" }}
                >
                  <TextField
                    type={showCpassword ? "text" : "password"}
                    name="Cpassword"
                    placeholder="Confirm password"
                    value={formik.values.Cpassword}
                    onChange={formik.handleChange}
                    sx={{ mt: 3 }}
                    variant="standard"
                    size="medium"
                    fullWidth
                  />
                  <Button
                    endIcon={<FingerprintIcon />}
                    sx={{ position: "absolute", right: -3, top: 20 }}
                    onClick={() => setShowCpassword(!showCpassword)}
                  ></Button>
                </Box>

                <Button
                  sx={{ mt: 3, backgroundColor: "#1565c0" }}
                  fullWidth
                  variant="contained"
                  size="small"
                  type="submit"
                >
                  Signup
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </Container>
  );
}

export default SignupPage;
