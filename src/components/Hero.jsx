import { Box, Container, Typography, Button, Stack, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-scroll';

const FOCUS_AREAS = [
  'ReactJS',
  'Node.js / NestJS',
  'Full-Stack Development',
  'AI-Powered Applications',
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

const fadeScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)'
              : 'radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(124, 58, 237, 0.04) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div initial="hidden" animate="visible" variants={fadeUp(0)}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  color: 'primary.main',
                  fontWeight: 500,
                  mb: 2,
                  fontSize: '0.95rem',
                }}
              >
                Hi, I'm
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp(0.1)}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.2rem' },
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Swami Malavade
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp(0.2)}>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  fontWeight: 400,
                  mb: 3,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  lineHeight: 1.6,
                }}
              >
                Senior Software Developer with 4+ years of experience building scalable
                and responsive web applications using ReactJS, Redux, Node.js, and NestJS.
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp(0.3)}>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
                {FOCUS_AREAS.map((area) => (
                  <Chip
                    key={area}
                    label={area}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: 'divider' }}
                  />
                ))}
              </Stack>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp(0.4)}>
              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                {/* <Button
                  variant="contained"
                  startIcon={<DescriptionIcon />}
                  href="/resume.pdf"
                  target="_blank"
                >
                  Resume
                </Button> */}
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

          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div initial="hidden" animate="visible" variants={fadeScale}>
              <Box
                sx={{
                  width: { xs: 260, sm: 300, md: 340 },
                  height: { xs: 260, sm: 300, md: 340 },
                  borderRadius: '50%',
                  padding: '4px',
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                }}
              >
                <Box
                  component="img"
                  src="/profile.png"
                  alt="Swami Malavade"
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
