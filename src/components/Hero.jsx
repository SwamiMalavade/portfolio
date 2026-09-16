import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-scroll";

const FOCUS_AREAS = [
  "Java / Spring Boot",
  "ReactJS / Redux",
  "Node.js / Express, NestJS",
  "Full-Stack Development",
  "AI-Powered Applications",
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const fadeScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
  },
};

const CODE_TOKEN = {
  kw: { color: "#c586c0" },
  str: { color: "#98c379" },
  num: { color: "#d19a66" },
  fn: { color: "#61afef" },
};

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: {
          xs: "90px", // Mobile
          sm: "100px", // Small tablets
          md: 0, // Desktop (no extra padding)
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)"
              : "radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(124, 58, 237, 0.04) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              order: { xs: 1, md: 1 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <motion.div initial="hidden" animate="visible" variants={fadeUp(0)}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  color: "primary.main",
                  fontWeight: 500,
                  mb: 2,
                  fontSize: "0.95rem",
                }}
              >
                Hi, I'm
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(0.1)}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.2rem", sm: "3rem", md: "4.2rem" },
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Swami Malavade
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(0.2)}
            >
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  fontWeight: 400,
                  mb: 3,
                  fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.3rem" },
                  lineHeight: 1.6,
                }}
              >
                Senior Software Developer with 4+ years of experience building
                scalable and responsive web applications using Java, Spring
                Boot, ReactJS, Redux, Node.js, ExpressJS, and NestJS.
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(0.3)}
            >
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                sx={{
                  mb: 4,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {FOCUS_AREAS.map((area) => (
                  <Chip
                    key={area}
                    label={area}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: "divider" }}
                  />
                ))}
              </Stack>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(0.4)}
            >
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1.5}
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/SwamiMalavade"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                  href="https://linkedin.com/in/swami-malavade"
                  target="_blank"
                >
                  LinkedIn
                </Button>
                <Link to="contact" spy smooth offset={-70} duration={500}>
                  <Button variant="outlined" startIcon={<EmailIcon />}>
                    Contact
                  </Button>
                </Link>
              </Stack>
            </motion.div>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              order: { xs: 1, md: 2 },
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeScale}
              style={{ position: "relative", width: "100%", maxWidth: 380 }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  width: { xs: 160, sm: 200, md: 240 },
                  height: { xs: 160, sm: 200, md: 240 },
                  borderRadius: "50%",
                  top: -36,
                  right: -24,
                  background:
                    "radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(124, 58, 237, 0.25) 55%, transparent 75%)",
                  filter: "blur(30px)",
                  zIndex: 0,
                  animation: "heroOrbFloat 6s ease-in-out infinite",
                  "@keyframes heroOrbFloat": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-18px)" },
                  },
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                  bgcolor: "#1e1e2e",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 0.9,
                    px: 2,
                    py: 1.3,
                    bgcolor: "rgba(255,255,255,0.04)",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Box
                    sx={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      bgcolor: "#ff5f56",
                    }}
                  />
                  <Box
                    sx={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      bgcolor: "#ffbd2e",
                    }}
                  />
                  <Box
                    sx={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      bgcolor: "#27c93f",
                    }}
                  />
                </Box>

                <Box
                  component="pre"
                  sx={{
                    m: 0,
                    p: { xs: 2, sm: 3 },
                    overflowX: "auto",
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: { xs: "0.72rem", sm: "0.82rem" },
                    lineHeight: 1.7,
                    color: "#d4d4d4",
                  }}
                >
                  <code>
                    <span style={CODE_TOKEN.kw}>const</span>
                    {" engineer = {\n"}
                    {"  name: "}
                    <span style={CODE_TOKEN.str}>"Swami Malavade"</span>
                    {",\n"}
                    {"  role: "}
                    <span style={CODE_TOKEN.str}>"Full Stack Engineer"</span>
                    {",\n"}
                    {"  experience: "}
                    <span style={CODE_TOKEN.num}>4</span>
                    {"+"}
                    <span style={CODE_TOKEN.str}> years</span>
                    {",\n"}
                    {"  stack: ["}
                    <span style={CODE_TOKEN.str}>"Java"</span>
                    {", "}
                    <span style={CODE_TOKEN.str}>"Spring Boot"</span>
                    {",\n"}
                    {"          "}
                    <span style={CODE_TOKEN.str}>"Node"</span>
                    {", "}
                    <span style={CODE_TOKEN.str}>"Express, NestJS"</span>
                    {",\n"}
                    {"          "}
                    <span style={CODE_TOKEN.str}>"React"</span>
                    {", "}
                    <span style={CODE_TOKEN.str}>"MySQL, NoSQL"</span>
                    {"],\n"}
                    {"  degree: "}
                    <span style={CODE_TOKEN.str}>"MSc (Computer Science)"</span>
                    {",\n"}
                    {"  available: "}
                    <span style={CODE_TOKEN.str}>true</span>
                    {",\n"}
                    {"}"}
                  </code>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
