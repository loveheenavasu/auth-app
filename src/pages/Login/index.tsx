import React, { useState } from "react";
import { Button, Container, TextField, Box, Typography } from "@mui/material";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';


interface Values {
  email: string;
  password: string;
}

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const onSubmit = async (values: any) => {
    console.log(values);
    if (formik.values.email && formik.values.password) {
              window.localStorage.setItem(
                "userData",
                JSON.stringify(values)
              );
              router.push("/Dashboard");
            }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  const handleGoogle = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000/Dashboard" });
  };
  const handleGithub = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000/Dashboard" });
  };
//   const handlelogin = () => {
//     if (username && password) {
//       window.localStorage.setItem(
//         "userData",
//         JSON.stringify(username, password)
//       );
//       router.push("/Dashboard");
//     }
//   };
const handlesignup=()=>{
    router.push('/Signup')
}

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
            background: '#e4eafd',
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
                width:'55%'
              }}
            >
              <TextField
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email"
                placeholder="Enter User Name"
                sx={{ mt: 1}}
                fullWidth
                variant="standard"
                size="medium"

                
              />
              <TextField
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                name="password"
                placeholder="Enter your password"
                fullWidth
                sx={{ mt: 3}}
                variant="standard"
                 size="medium"
              />
              <Button sx={{ mt: 3, backgroundColor:'#1565c0' }} fullWidth variant="contained" size='small' type="submit">
                Sign in
              </Button>
              <Button sx={{ mt: 3, backgroundColor:'#1565c0' }} variant="contained" fullWidth size='small' onClick={handleGoogle} endIcon={<GoogleIcon/>}>
                Sign in with google
              </Button>
              <Button sx={{ mt: 3, backgroundColor:'#1565c0' }} variant="contained" fullWidth size="small" onClick={handleGithub} endIcon ={<GitHubIcon/>}>
                Sign in with Github
              </Button>
              <Typography sx={{ mt: 5 }}>Dont have an Account <Button onClick={handlesignup}>Sign up</Button></Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      </form>
     
    </Container>
  );
}

export default LoginPage;
