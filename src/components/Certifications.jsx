import { Typography, Box, Stack, Grid, Button } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionWrapper from './SectionWrapper';

const CERTIFICATIONS = [
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    url: 'https://verify.skilljar.com/c/3doboatthq48',
  },
  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    url: 'https://verify.skilljar.com/c/9cibcxdqfydr',
  },
  {
    title: 'React JS Basics',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/YBAMZW6X867R',
  },
  {
    title: 'The OWASP Top 10 2025 - Deep Dive',
    issuer: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-ccfa718e-7b5a-4322-8197-c219bc0ee807/',
  },
  {
    title: 'Payment Systems in the USA & Canada: FEDWIRE/CHIPS/ACH/LYNX',
    issuer: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-9e5dd605-96aa-4d86-883f-d62ffe4d8ccc/',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Courses and credentials I've completed."
    >
      <Grid container spacing={3}>
        {CERTIFICATIONS.map((cert, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cert.title}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              style={{ height: '100%' }}
            >
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  border: 1,
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                      flexShrink: 0,
                    }}
                  >
                    <WorkspacePremiumIcon sx={{ color: '#fff', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1rem', lineHeight: 1.3 }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                      {cert.issuer}
                    </Typography>
                  </Box>
                </Stack>

                <Button
                  size="small"
                  startIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                  href={cert.url}
                  target="_blank"
                  sx={{ fontSize: '0.8rem', mt: 'auto', alignSelf: 'flex-start' }}
                >
                  View Certificate
                </Button>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
