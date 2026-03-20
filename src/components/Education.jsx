import { Typography, Box, Stack, Grid, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const EDUCATION = [
  {
    degree: 'MSc in Computer Science',
    school: 'Nowrosjee Wadia College, Pune',
    location: 'Pune, India',
    period: '2018 – 2020',
    gpa: '',
    highlights: ['Computer Science', 'Advanced Programming', 'Software Development'],
  },
  {
    degree: 'BSc in Computer Science',
    school: 'Nowrosjee Wadia College, Pune',
    location: 'Pune, India',
    period: '2014 – 2018',
    gpa: '',
    highlights: ['Computer Science Fundamentals', 'Data Structures', 'Database Systems'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="Academic foundation and areas of focus."
    >
      <Grid container spacing={3}>
        {EDUCATION.map((edu, i) => (
          <Grid size={{ xs: 12, md: 6 }} key={edu.degree}>
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
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  border: 1,
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
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
                    }}
                  >
                    <SchoolIcon sx={{ color: '#fff', fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.05rem', lineHeight: 1.3 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                      {edu.school}
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ mb: 2 }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem' }}
                  >
                    {edu.period}
                  </Typography>
                  {edu.gpa && (
                    <Chip
                      label={`GPA: ${edu.gpa}`}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{ fontSize: '0.75rem', fontWeight: 600 }}
                    />
                  )}
                </Stack>

                <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mt: 'auto' }}>
                  {edu.highlights.map((h) => (
                    <Chip
                      key={h}
                      label={h}
                      size="small"
                      sx={{
                        fontSize: '0.72rem',
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.06)'
                            : 'rgba(0,0,0,0.04)',
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
