import { Typography, Box, Button, Stack, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Link } from 'react-scroll';
import SectionWrapper from './SectionWrapper';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <SectionWrapper id="contact" maxWidth="sm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 2 }}
          >
            Let's Connect
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 480, mx: 'auto' }}
          >
            I'm always open to discussing new opportunities, interesting projects,
            or just connecting with fellow engineers. Drop me a line.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            href="mailto:swami.91196@gmail.com"
            sx={{
              mb: 4,
              fontSize: { xs: '0.8rem', sm: '0.95rem' },
              px: { xs: 2.5, sm: 3 },
            }}
          >
            swami.91196@gmail.com
          </Button>

          <Stack direction="row" justifyContent="center" spacing={1}>
            <IconButton
              href="https://linkedin.com/in/swami-malavade"
              target="_blank"
              sx={{
                border: 1,
                borderColor: 'divider',
                '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/SwamiMalavade"
              target="_blank"
              sx={{
                border: 1,
                borderColor: 'divider',
                '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Box>
      </motion.div>

      <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 10 }, pb: 2 }}>
        <Link to="hero" spy smooth offset={-70} duration={800}>
          <IconButton size="small" sx={{ mb: 2, border: 1, borderColor: 'divider' }}>
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>
        </Link>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
          Designed & built by Swami Malavade
        </Typography>
      </Box>
    </SectionWrapper>
  );
}
